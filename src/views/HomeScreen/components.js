import avatarMale from "../../assets/images/avatar-male.png";
import moreDotsIcon from "../../assets/images/more_vert.svg";
import knowMoreImage from "../../assets/images/know_more.png";
import flagImage from "../../assets/images/nepalFlag.png";
import worldImage from "../../assets/images/world.png";
import arrowBtn from "../../assets/images/arrow_btn.svg";
import StatsProgressBar from "../../components/StatsProgressBar";
import { colors } from "../../utils/color";
import { formatTime, formatNumber } from "../../utils/helpers";
import React from "react";

export const AppBar = ({ name,onClick }) => {
  return (
    <div className="app-bar">
      <div className="flex jcsb ci">
        <div className="left flex ci">
          <img src={avatarMale} alt="" />
          <p>Hello {name}</p>
        </div>
        <div className="right">
          <img onClick={onClick && onClick} src={moreDotsIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export const StaySafeText = () => {
  return (
    <div className="stay-safe">
      <p>
        Stay Home <br /> Stay Safe
      </p>
    </div>
  );
};

export const IconButton = ({ text, onClick, color, icon }) => {
  return (
    <div className="icon-btn" onClick={onClick && onClick}>
      <div className="shape" style={{ backgroundColor: color }}>
        <img className="pos-center" src={icon} alt="" />
      </div>
      {text && <p>{text}</p>}
    </div>
  );
};


export const GlobalStats = props => {


  return (
    <div className="homescreen-stats-card">
      <header className="flex jcsb">
        <div className="left flex ci">
          <img src={worldImage} alt="" />
          <div className="content">
            <div className="stats-of">Global</div>
            <div className="updated">Updated {formatTime(props.data.lastUpdate)} </div>
          </div>
        </div>
        <div className="right">
          <img src={arrowBtn} alt="" />
        </div>
      </header>
      <div className="content">
        <StatsProgressBar
          keyz="Cases"
          value={formatNumber(props.data.confirmed)}
          color={colors.blue}
          width="100%"
        />
        <StatsProgressBar
          keyz="Recovered"
          value={formatNumber(props.data.recovered)}
          color={colors.green}
          width="15%"
        />
        <StatsProgressBar
          keyz="Active"
          value={formatNumber(props.data.active)}
          color={colors.orange}
          width="67%"
        />
        <StatsProgressBar
          keyz="Death"
          value={formatNumber(props.data.deaths)}
          color={colors.red}
          width="7%"
        />
      </div>
      <div className="text-btn">
        <a href="#nowhere">Stats by country ></a>
      </div>
      <footer>
        <p>Source: worldometers.info</p>
      </footer>
    </div>
  );
};

export const NepalStats = (props) => {
  return (
    <div className="homescreen-stats-card">
      <header className="flex jcsb">
        <div className="left flex ci">
          <img src={flagImage} alt="" />
          <div className="content">
            <div className="stats-of">Nepal</div>
            <div className="updated">Updated {formatTime(props.data.lastUpdate)}</div>
          </div>
        </div>
        <div className="right">
          <img src={arrowBtn} alt="" />
        </div>
      </header>
      <div className="content">
        <div className="flex jcsb">


          <StatsProgressBar
            keyz="Cases"
            value={formatNumber(props.data.confirmed)}
            color={colors.blue}
            width="100%"
          />
          <div className="hgap x2"></div>
          <StatsProgressBar
            keyz="Active"
            value={formatNumber(props.data.active)}
            color={colors.orange}
            width="50%"
          />
        </div>
        <div className="flex jcsb">
          <StatsProgressBar
            keyz="Recovered"
            value={formatNumber(props.data.recovered)}
            color={colors.green}
            width="10%"
          />
          <div className="hgap x2"></div>
          <StatsProgressBar
            keyz="Death"
            value={formatNumber(props.data.deaths)}
            color={colors.red}
            width="2%"
          />
        </div>
      </div>
      <footer>
        <p>Source: mohp.gov.np</p>
      </footer>
    </div>
  );
};

export const KnowMore = () => {
  return (
    <div className="know-more">
      <div className="contents">
        <p>All you need to know about coronavirus!</p>
        <button className="btn-know-more">Know More</button>
      </div>
      <div className="ilustration">
        <img src={knowMoreImage} alt="" />
      </div>
    </div>
  );
};
