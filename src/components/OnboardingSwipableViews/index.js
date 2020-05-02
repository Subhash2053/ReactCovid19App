import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import stayUpdatedImage from "../../assets/images/stay_updated.png";
import stayAlertImage from "../../assets/images/stay_alert.png";
import readNewsImage from "../../assets/images/read_news.png";

export default function OnboardingSwipableViews() {


    const [index,setIndex] = React.useState(0);

    const handleIndexChange = (index) =>{

        setIndex(index);
    }

    const Item = (props) => {

        return (
            <div className="swipeable-item">
                <img src={props.image} alt="" />
                <div className="gap"></div>
                <h3 className="title"> {props.title}</h3>
                <p className="description">{props.desc}</p>
            </div>
        );

    };

    return (
        <div className="onboarding-swipeable-views">
            <SwipeableViews index={index} onChangeIndex={handleIndexChange}>
                <Item image={stayUpdatedImage} title="Stay Updated" desc="Lorem Tarem"></Item>
                <Item image={stayAlertImage} title="Stay Alerted" desc="Lorem Tarem"></Item>
                <Item image={readNewsImage} title="Read News" desc="Lorem Tarem"></Item>

            </SwipeableViews>

          

            <div className="pagination">
                <div className={`dots ${index === 0 && "active"}`}></div>
                <div className={`dots ${index === 1 && "active"}`}></div>
                <div className={`dots ${index === 2 && "active"}`}></div>

            </div>

        </div>
    )
}
