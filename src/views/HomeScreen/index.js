import React, { Component } from 'react'
import phoneIcon from "../../assets/images/phone-call.svg";
import newsIcon from "../../assets/images/bullhorn.svg";
import chatIcon from "../../assets/images/message.svg";
import moreIcon from "../../assets/images/Group.svg";
//import arrowBtn from "../../assets/images/arrow_btn.svg";
import calendarIcon from "../../assets/images/calendar.svg";
import surveyIcon from "../../assets/images/survey.svg";
import bellIcon from "../../assets/images/bell.svg";
import reportIcon from "../../assets/images/report.svg";

import { colors } from "../../utils/color";
import { AppBar, StaySafeText, IconButton, GlobalStats, NepalStats, KnowMore } from "./components";
import axios from 'axios';
import ButtonSheet, { ButtonSheetIconButton } from '../../components/ButtonSheet';

export default class HomeScreenView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nepal: {
        confirmed: 0,
        recovered: 0,
        deaths: 0,
        active: 0,
        lastUpdate: Date
      },
      world: {
        confirmed: 0,
        recovered: 0,
        deaths: 0,
        active: 0,
        lastUpdate: Date
      },
      buttonsheet: false,
      buttonsheet1: false
    };
    this.buttonOnMore = this.buttonOnMore.bind(this);
    this.buttonOnSideMenu = this.buttonOnSideMenu.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentWillMount() {
    axios.get('https://covid19.mathdro.id/api', {})
      .then(res => {
        console.log(res.data)
        this.setState({
          world: {
            confirmed: res.data.confirmed.value,
            recovered: res.data.recovered.value,
            deaths: res.data.deaths.value,
            active: (res.data.confirmed.value - res.data.recovered.value - res.data.deaths.value),
            lastUpdate: res.data.lastUpdate
          }
        });
      }).catch(err => {
        console.log(err)
      })

    axios.get('https://covid19.mathdro.id/api/countries/NP', {})
      .then(res => {
        console.log(res.data.confirmed.value)
        this.setState({
          nepal: {
            confirmed: res.data.confirmed.value,
            recovered: res.data.recovered.value,
            deaths: res.data.deaths.value,
            active: (res.data.confirmed.value - res.data.recovered.value - res.data.deaths.value),
            lastUpdate: res.data.lastUpdate
          }
        });
      }).catch(err => {
        console.log(err)
      })




  }



  buttonOnMore() {
    this.setState(state => ({
      buttonsheet: !state.buttonsheet
    }));
  }

    buttonOnSideMenu() {
      this.setState(state => ({
        buttonsheet1: !state.buttonsheet1
      }));

    }
    logOut(){
      this.props.history.push('/');
    }

    render() {
      return (
        <section id="home-screen">


          <ButtonSheet visible={this.state.buttonsheet} onClose={this.buttonOnMore}>


            <ButtonSheetIconButton
              text="Events"
              color={colors.blue}
              icon={calendarIcon}
            />
            <ButtonSheetIconButton
              text="Survey"
              color={colors.purple}
              icon={surveyIcon}
            />
            <ButtonSheetIconButton
              text="Reports"
              color={colors.orange}
              icon={reportIcon}
            />
            <ButtonSheetIconButton
              text="Notice"
              color={colors.blue}
              icon={bellIcon}
            />
          </ButtonSheet>



          <ButtonSheet visible={this.state.buttonsheet1} onClose={this.buttonOnSideMenu}>


            <ButtonSheetIconButton
              text="Profile"
              color={colors.blue}
              icon={calendarIcon}
            />

            <ButtonSheetIconButton
              text="Setting"
              color={colors.orange}
              icon={reportIcon}
            />
            <ButtonSheetIconButton
              text="Logout"
              color={colors.blue}
              icon={bellIcon}
              onClick={this.logOut}
            />
          </ButtonSheet>

          <div className="wrap">
            <AppBar name="Guest" onClick={this.buttonOnSideMenu} />
            <StaySafeText />
            <div className="gap x2"></div>
            <div className="flex jcsb">
              <IconButton icon={phoneIcon} text="Contacts" color={colors.blue} />
              <IconButton icon={newsIcon} text="News" color={colors.orange} />
              <IconButton icon={chatIcon} text="Chat" color={colors.purple} />
              <IconButton icon={moreIcon} text="More" color={colors.yellow} onClick={this.buttonOnMore} />
            </div>

            <div className="gap x2"></div>
            <KnowMore />
            <div className="gap x2"></div>
            <NepalStats data={this.state.nepal} />
            <div className="gap x2"></div>
            <GlobalStats data={this.state.world} />
            <div className="gap x2"></div>
          </div>
        </section>
      )
    }
  }


