import HomeHeader from '../Header/HomeHeader';

import classes from './Payment.module.css';

import {useEffect} from 'react';

import { useNavigate } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FAQsButton from '../FAQs/FAQsButton';

const Payment = () => {

    const navigate = useNavigate();
    const completePaymentBtn = () => {
        navigate("/completepayment")
    };

    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <HomeHeader/>
            <FAQsButton/>
           <Grid container justifyContent="center">
                <main className={classes.pricing}>
                    {/* Hero unit */}
                    <div className={classes.pricingContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            <h1>Our pricing</h1>
                        </Typography>
                    </div>
                    {/* End hero unit */}
                    <Grid container spacing={40} alignItems="flex-end">
                        <Grid item xs={12} s={12} md={4} l={4} xl={4} >
                          <button className={classes.wholepricingbtn} onClick={completePaymentBtn}>
                              <button className={classes.pricingbtn} >
                                  <Grid container>
                                      <Grid item xs={8} s={8} md={8} l={8} xl={8}><h2>Couples</h2></Grid>
                                      <Grid item xs={4} s={4} md={4} l={4} xl={4}>
                                          <svg width="25" height="30" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M20.2162 8.93913C20.3407 9.03925 20.4956 9.09381 20.6553 9.09375C20.815 9.09369 20.9699 9.03903 21.0943 8.93883L24.2461 6.3995C25.0487 5.75289 25.6375 4.87914 25.9355 3.89251C26.0626 3.47154 26.0862 3.02607 26.0041 2.59405C25.922 2.16202 25.7368 1.75622 25.4641 1.41121C24.6979 0.44164 23.376 0.107976 22.2414 0.597614C21.6237 0.854132 21.1229 1.18917 20.653 1.61275C20.1849 1.19085 19.6843 0.854973 19.0646 0.597614C17.9301 0.107976 16.608 0.44164 15.8418 1.41121C15.5692 1.75623 15.3839 2.16202 15.3019 2.59405C15.2198 3.02608 15.2433 3.47154 15.3705 3.89251C15.6685 4.87913 16.2573 5.75287 17.0598 6.3995L20.2162 8.93913Z" fill="#EB5569"/>
                                              <path d="M25.4641 1.41121C24.7042 0.449744 23.398 0.114093 22.27 0.585993C22.6968 0.764201 23.0713 1.0482 23.358 1.41121C23.6307 1.75623 23.8159 2.16203 23.898 2.59405C23.9801 3.02608 23.9565 3.47153 23.8294 3.89251C23.5314 4.87913 22.9426 5.75287 22.14 6.39949L19.6016 8.4446L20.2162 8.93913C20.3406 9.03925 20.4956 9.09381 20.6553 9.09375C20.815 9.09369 20.9699 9.03903 21.0943 8.93883L24.2461 6.39949C25.0487 5.75289 25.6375 4.87914 25.9354 3.89251C26.0626 3.47153 26.0862 3.02607 26.0041 2.59404C25.922 2.16202 25.7367 1.75622 25.4641 1.41121Z" fill="#E53950"/>
                                              <path d="M36.95 28.4101C37.7428 27.5026 38.1192 26.2373 37.9707 24.9785L37.4755 20.7792C36.9405 16.2431 33.7648 12.4048 29.306 10.9053L24.7406 12.4407C23.0797 12.9992 21.8655 14.5969 21.6384 16.5227L20.6412 24.9785C20.4927 26.2373 20.8691 27.5026 21.6619 28.4101C22.356 29.2045 23.3064 29.6523 24.2987 29.6523H34.3132C35.3055 29.6523 36.2559 29.2045 36.95 28.4101Z" fill="#C86D36"/>
                                              <path d="M37.9682 24.9785L37.473 20.7793C36.938 16.2432 33.7623 12.4049 29.3035 10.9054H29.3034L28.2773 11.2505C32.2559 12.9403 35.0418 16.5573 35.5397 20.7793L36.0349 24.9785C36.1833 26.2373 35.807 27.5027 35.0141 28.4102C34.3201 29.2046 33.3696 29.6523 32.3773 29.6523H34.3107C35.303 29.6523 36.2535 29.2046 36.9474 28.4102C37.7402 27.5027 38.1166 26.2373 37.9682 24.9785Z" fill="#AC5E2E"/>
                                              <path d="M24.8648 29.6506C23 29.6506 21.4883 31.1623 21.4883 33.0271V38.375H37.1191V33.0271C37.1191 31.1623 35.6073 29.6506 33.7425 29.6506H24.8648Z" fill="#F58A97"/>
                                              <path d="M33.741 29.6506H31.9688C33.8336 29.6506 35.3453 31.1623 35.3453 33.0271V38.375H37.1176V33.0271C37.1176 31.1623 35.6058 29.6506 33.741 29.6506Z" fill="#F07181"/>
                                              <path d="M29.3043 32.7188C27.7857 32.7188 26.5547 31.4877 26.5547 29.9691V23.352H32.0539V29.9691C32.0539 31.4877 30.8229 32.7188 29.3043 32.7188Z" fill="#FFAF9E"/>
                                              <path d="M26.5547 28.7898C27.1641 29.0739 27.8146 29.2599 28.4821 29.3407C28.4813 29.3408 28.4804 29.3409 28.4796 29.341C29.761 29.4978 30.9867 29.2763 32.0539 28.7704V23.3492H26.5547V28.7898Z" fill="#FFA78F"/>
                                              <path d="M32.6016 18.6774H35.7331C36.9371 18.6774 37.913 19.6534 37.913 20.8574V20.8708C37.913 22.0748 36.9371 23.0508 35.7331 23.0508H32.6016V18.6774Z" fill="#FFA78F"/>
                                              <path d="M25.9638 23.0508H22.8322C21.6283 23.0508 20.6523 22.0748 20.6523 20.8708V20.8574C20.6523 19.6534 21.6283 18.6774 22.8322 18.6774H25.9638V23.0508Z" fill="#FFAF9E"/>
                                              <path d="M29.2052 13.3035C25.6865 13.3351 22.8438 16.1967 22.8438 19.7228V21.9986C22.8438 25.5246 25.6865 28.3864 29.2052 28.418C32.7238 28.3864 35.5666 25.5246 35.5666 21.9986V19.7228C35.5666 16.1967 32.7238 13.3351 29.2052 13.3035Z" fill="#FFCEBF"/>
                                              <path d="M25.6397 23.0654H24.6919C24.5788 23.0654 24.4704 23.1103 24.3905 23.1902C24.3105 23.2702 24.2656 23.3786 24.2656 23.4916C24.2656 23.6047 24.3105 23.7131 24.3905 23.793C24.4704 23.873 24.5788 23.9179 24.6919 23.9179H25.6397C25.6964 23.919 25.7527 23.9087 25.8053 23.8878C25.858 23.8669 25.906 23.8356 25.9464 23.7959C25.9868 23.7563 26.019 23.7089 26.0409 23.6567C26.0628 23.6044 26.0741 23.5483 26.0741 23.4916C26.0741 23.435 26.0628 23.3789 26.0409 23.3266C26.019 23.2744 25.9868 23.227 25.9464 23.1873C25.906 23.1476 25.858 23.1164 25.8053 23.0955C25.7527 23.0745 25.6964 23.0643 25.6397 23.0654Z" fill="#FE8F83"/>
                                              <path d="M29.3079 13.3059H29.2642C28.9989 13.3059 28.7374 13.3223 28.4805 13.3536C31.6565 13.7401 34.1169 16.4455 34.1169 19.726V22.0017C34.1169 25.2821 31.6565 27.9875 28.4805 28.3742C28.7405 28.4059 29.0023 28.4218 29.2642 28.4219H29.3079C32.8537 28.4219 35.728 25.5474 35.728 22.0017V19.726C35.728 16.1802 32.8537 13.3059 29.3079 13.3059Z" fill="#FFAF9E"/>
                                              <path d="M33.9171 23.0655H32.9692C32.8562 23.0655 32.7478 23.1104 32.6678 23.1903C32.5879 23.2702 32.543 23.3787 32.543 23.4917C32.543 23.6048 32.5879 23.7132 32.6678 23.7931C32.7478 23.8731 32.8562 23.918 32.9692 23.918H33.9171C34.0301 23.918 34.1385 23.8731 34.2185 23.7931C34.2984 23.7132 34.3433 23.6048 34.3433 23.4917C34.3433 23.3787 34.2984 23.2702 34.2185 23.1903C34.1385 23.1104 34.0301 23.0655 33.9171 23.0655Z" fill="#FE8F83"/>
                                              <path d="M27.3014 19.2422H28.5903L31.3675 14.8422L28.071 13.4149C25.9884 13.8057 24.2602 15.2013 23.4102 17.0798C24.2194 18.3778 25.6592 19.2422 27.3014 19.2422Z" fill="#FFAF9E"/>
                                              <path d="M37.2001 19.2422H28.5909C26.0597 19.2422 24.0078 17.1903 24.0078 14.6591V14.3568C24.0078 12.0195 25.9025 10.1247 28.2399 10.1247H31.2992C34.5582 10.1247 37.2001 12.7666 37.2001 16.0257V19.2422Z" fill="#D77F4A"/>
                                              <path d="M31.1595 10.1247H29.1719C32.5079 10.1247 35.2123 12.7056 35.2123 15.8893V19.2422H37.1999V15.8893C37.1999 12.7056 34.4955 10.1247 31.1595 10.1247Z" fill="#C86D36"/>
                                              <path d="M15.5544 29.7445H3.17883C1.42319 29.7445 0 31.1677 0 32.9234V38.375H18.7333V32.9234C18.7333 31.1677 17.3101 29.7445 15.5544 29.7445Z" fill="#3C87D0"/>
                                              <path d="M15.8867 29.7445H13.8828C15.6384 29.7445 17.0616 31.1677 17.0616 32.9234V38.375H19.0655V32.9234C19.0655 31.1677 17.6423 29.7445 15.8867 29.7445Z" fill="#0078C8"/>
                                              <path d="M9.53257 33.0039C8.0044 33.0039 6.76562 31.7651 6.76562 30.237V23.5782H12.2995V30.237C12.2995 31.7651 11.0607 33.0039 9.53257 33.0039Z" fill="#FFAF9E"/>
                                              <path d="M6.76562 28.8941C7.58258 29.2629 8.48723 29.4719 9.43975 29.4805C10.465 29.4713 11.4349 29.2302 12.2995 28.8073V23.9139H6.76562V28.8941Z" fill="#FFA78F"/>
                                              <path d="M12.9609 18.2132H16.2067C17.4546 18.2132 18.4662 19.2248 18.4662 20.4727V20.4866C18.4662 21.7345 17.4546 22.7461 16.2067 22.7461H12.9609V18.2132Z" fill="#FFA78F"/>
                                              <path d="M10.0882 11.1552H4.50188C2.52819 11.1552 0.996347 12.877 1.22595 14.8373L1.94382 20.9648H10.0882V11.1552Z" fill="#AA6A51"/>
                                              <path d="M6.08342 22.7461H2.83762C1.58974 22.7461 0.578125 21.7345 0.578125 20.4866V20.4728C0.578125 19.2248 1.58974 18.2132 2.83762 18.2132H6.08342V22.7461Z" fill="#FFAF9E"/>
                                              <path d="M9.44126 12.6425C5.7942 12.6752 2.84766 15.6413 2.84766 19.2961V21.6549C2.84766 25.3097 5.7942 28.2759 9.44126 28.3086C13.0883 28.2759 16.0349 25.3097 16.0349 21.6549V19.2961C16.0349 15.6413 13.0883 12.6752 9.44126 12.6425Z" fill="#FFCEBF"/>
                                              <path d="M5.82078 22.7804H4.83829C4.77978 22.7796 4.7217 22.7905 4.66742 22.8123C4.61315 22.8342 4.56375 22.8666 4.5221 22.9077C4.48046 22.9488 4.44739 22.9978 4.42482 23.0518C4.40225 23.1058 4.39062 23.1637 4.39062 23.2222C4.39062 23.2807 4.40225 23.3387 4.42482 23.3926C4.44739 23.4466 4.48046 23.4956 4.5221 23.5367C4.56375 23.5778 4.61315 23.6102 4.66742 23.6321C4.7217 23.6539 4.77978 23.6648 4.83829 23.664H5.82078C5.93795 23.664 6.05033 23.6175 6.13319 23.5346C6.21604 23.4518 6.26259 23.3394 6.26259 23.2222C6.26259 23.105 6.21604 22.9927 6.13319 22.9098C6.05033 22.8269 5.93795 22.7804 5.82078 22.7804Z" fill="#FE8F83"/>
                                              <path d="M9.54659 12.6448H9.50133C9.19748 12.6448 8.89853 12.6656 8.60547 12.7051C11.8569 13.1426 14.3642 15.9279 14.3642 19.2993V21.658C14.3642 25.0294 11.8569 27.8148 8.60547 28.2523C8.90241 28.2923 9.2017 28.3124 9.50133 28.3125H9.54659C13.2217 28.3125 16.2011 25.3332 16.2011 21.658V19.2993C16.2011 15.6241 13.2217 12.6448 9.54659 12.6448Z" fill="#FFAF9E"/>
                                              <path d="M14.2075 22.7804H13.225C13.1665 22.7796 13.1084 22.7905 13.0541 22.8123C12.9999 22.8342 12.9505 22.8666 12.9088 22.9077C12.8672 22.9488 12.8341 22.9978 12.8115 23.0518C12.789 23.1058 12.7773 23.1637 12.7773 23.2222C12.7773 23.2807 12.789 23.3387 12.8115 23.3926C12.8341 23.4466 12.8672 23.4956 12.9088 23.5367C12.9505 23.5778 12.9999 23.6102 13.0541 23.6321C13.1084 23.6539 13.1665 23.6648 13.225 23.664H14.2075C14.3247 23.664 14.437 23.6175 14.5199 23.5346C14.6028 23.4518 14.6493 23.3394 14.6493 23.2222C14.6493 23.105 14.6028 22.9927 14.5199 22.9098C14.437 22.8269 14.3247 22.7804 14.2075 22.7804Z" fill="#FE8F83"/>
                                              <path d="M6.68162 18.2109H8.276V12.7565C6.03876 13.1729 4.19489 14.7075 3.34766 16.7595C4.17967 17.652 5.36508 18.2109 6.68162 18.2109Z" fill="#FFAF9E"/>
                                              <path d="M17.6585 18.2109H8.52275C6.00551 18.2109 3.96484 16.1703 3.96484 13.6531V12.4262C3.96484 10.5865 5.45616 9.09528 7.29575 9.09528H13.1557C15.6425 9.09528 17.6585 11.1113 17.6585 13.5981V18.2109Z" fill="#AA6A51"/>
                                              <path d="M13.1523 9.09528H11.1484C13.6352 9.09528 15.6513 11.1113 15.6513 13.5981V18.2109H17.6552V13.5981C17.6552 11.1113 15.6391 9.09528 13.1523 9.09528Z" fill="#935B44"/>
                                          </svg>
                                      </Grid>
                                      <Grid item xs={12} s={12} md={12} l={12} xl={12}><h1>$30.00</h1></Grid>
                                          <Grid item xs={12} s={12} md={12} l={12} xl={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                              <p style={{ textAlign: "center" }}>
                                                  It’ll cover both of couple fees for one time included the test taken before test and a 1-hour meeting with your coach
                                              </p>
                                          </Grid>
                                      <Grid item xs={12} s={12} md={12} l={12} xl={12}>
                                          <ul>
                                              <li>1-hour session</li>
                                              <li>Color diagnostic test</li>
                                              <li>personality test results</li>
                                          </ul>  
                                      </Grid>
                                      {/* <Grid item xs={12} s={12} md={12} l={12} xl={12}>
                                          <button>Get started today</button>
                                      </Grid> */}
                                  </Grid>
                              </button>
                              <button className={classes.getStartedBtn} >Get started today</button>
                          </button>
                        </Grid>
                        <Grid item xs={12} s={12} md={4} l={4} xl={4} >
                          <button className={classes.wholepricingbtn2} onClick={completePaymentBtn}>
                                <button className={classes.pricingbtn} >
                                    <Grid container>
                                        <Grid item xs={8} s={8} md={8} l={8} xl={8}><h2>Adults</h2></Grid>
                                        <Grid item xs={4} s={4} md={4} l={4} xl={4}>
                                          <svg width="24" height="29" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.33594 14.1133H9.33613V19.4469H5.33594V14.1133Z" fill="#0A5078"/>
                                            <path d="M4.00391 20.7773H20.0047V38.1115H4.00391V20.7773Z" fill="#F58A97"/>
                                            <path d="M17.3342 20.7773H20.001V38.1115H17.3342V20.7773ZM4.0002 20.7773H6.66699V38.1115H4.0002V20.7773ZM0 38.1115H4.0002V20.7773C2.93928 20.7773 1.92181 21.1988 1.17163 21.949C0.421448 22.6992 0 23.7166 0 24.7775V38.1115Z" fill="#00A0C8"/>
                                            <path d="M17.3352 20.7773C17.3352 22.1919 16.7732 23.5485 15.773 24.5488C14.7727 25.549 13.4161 26.1109 12.0016 26.1109C10.587 26.1109 9.23039 25.549 8.23014 24.5488C7.2299 23.5485 6.66797 22.1919 6.66797 20.7773H17.3352Z" fill="#D2AA82"/>
                                            <path d="M10.6709 0.777344H13.3377C17.0199 0.777344 20.0047 3.76216 20.0047 7.44434V11.4445C20.0047 12.1518 19.7237 12.8301 19.2236 13.3302C18.7235 13.8304 18.0452 14.1113 17.3379 14.1113H6.6707C5.96343 14.1113 5.28512 13.8304 4.78499 13.3302C4.28487 12.8301 4.00391 12.1518 4.00391 11.4445V7.44434C4.00391 3.76216 6.98872 0.777344 10.6709 0.777344Z" fill="#0A5078"/>
                                            <path d="M9.33203 16.7812H14.6656V20.7814H9.33203V16.7812Z" fill="#D2AA82"/>
                                            <path d="M10.6695 19.4473H13.3363C14.7509 19.4473 16.1075 18.8853 17.1078 17.8851C18.108 16.8849 18.6699 15.5282 18.6699 14.1137V10.1135C18.3163 10.1135 17.9771 9.97299 17.7271 9.72293C17.477 9.47287 17.3365 9.13372 17.3365 8.78008C17.3365 8.0728 17.0556 7.39449 16.5554 6.89437C16.0553 6.39425 15.377 6.11328 14.6697 6.11328H13.3363C13.3363 7.1742 12.9149 8.19167 12.1647 8.94185C11.4145 9.69203 10.3971 10.1135 9.33613 10.1135H5.33594V14.1137C5.33594 15.5282 5.89787 16.8849 6.89811 17.8851C7.89835 18.8853 9.25498 19.4473 10.6695 19.4473Z" fill="#F0C8A0"/>
                                            <path d="M18.6713 14.1096V10.1094C19.0249 10.1094 19.3641 10.2499 19.6142 10.4999C19.8642 10.75 20.0047 11.0891 20.0047 11.4428V12.7762C20.0047 13.1298 19.8642 13.469 19.6142 13.719C19.3641 13.9691 19.0249 14.1096 18.6713 14.1096ZM5.33731 14.1096V10.1094C4.98367 10.1094 4.64451 10.2499 4.39445 10.4999C4.14439 10.75 4.00391 11.0891 4.00391 11.4428V12.7762C4.00391 13.1298 4.14439 13.469 4.39445 13.719C4.64451 13.9691 4.98367 14.1096 5.33731 14.1096Z" fill="#D2AA82"/>
                                            <path d="M4.67061 38.1139V26.4466C4.67061 26.3582 4.63549 26.2734 4.57297 26.2109C4.51045 26.1484 4.42567 26.1133 4.33726 26.1133C4.24885 26.1133 4.16406 26.1484 4.10154 26.2109C4.03903 26.2734 4.00391 26.3582 4.00391 26.4466V38.1139H4.67061Z" fill="#0082AA"/>
                                            <path d="M24.0002 38.1115H20V20.7773C21.0609 20.7773 22.0784 21.1988 22.8286 21.949C23.5787 22.6992 24.0002 23.7166 24.0002 24.7775V38.1115Z" fill="#00A0C8"/>
                                            <path d="M19.3359 38.1139V26.4466C19.3359 26.3582 19.3711 26.2734 19.4336 26.2109C19.4961 26.1484 19.5809 26.1133 19.6693 26.1133C19.7577 26.1133 19.8425 26.1484 19.905 26.2109C19.9675 26.2734 20.0026 26.3582 20.0026 26.4466V38.1139H19.3359Z" fill="#0082AA"/>
                                            <path d="M6.00264 26.1123C5.82582 26.1123 5.65624 26.0421 5.53121 25.917C5.40618 25.792 5.33594 25.6224 5.33594 25.4456V19.4453H9.33613V22.7788C9.33613 23.6629 8.98493 24.5108 8.35978 25.1359C7.73462 25.7611 6.88674 26.1123 6.00264 26.1123Z" fill="#0A5078"/>
                                          </svg>

                                        </Grid>
                                        <Grid item xs={12} s={12} md={12} l={12} xl={12}><h1>$20.00</h1></Grid>
                                            <Grid item xs={12} s={12} md={12} l={12} xl={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <p style={{ textAlign: "center" }}>
                                                    It’ll cover both of couple fees for one time included the test taken before test and a 1-hour meeting with your coach
                                                </p>
                                            </Grid>
                                        <Grid item xs={12} s={12} md={12} l={12} xl={12}>
                                            <ul>
                                                <li>1-hour session</li>
                                                <li>Color diagnostic test</li>
                                                <li>personality test results</li>
                                            </ul>  
                                        </Grid>
                                        {/* <Grid item xs={12} s={12} md={12} l={12} xl={12}>
                                            <button>Get started today</button>
                                        </Grid> */}
                                    </Grid>
                                </button>
                                <button className={classes.getStartedBtn2}>Get started today</button>
                            </button>
                        </Grid>
                        <Grid item xs={12} s={12} md={4} l={4} xl={4} >
                          <button className={classes.wholepricingbtn3} onClick={completePaymentBtn}>
                                <button className={classes.pricingbtn} >
                                    <Grid container>
                                        <Grid item xs={8} s={8} md={8} l={8} xl={8}><h2>Teenagers</h2></Grid>
                                        <Grid item xs={4} s={4} md={4} l={4} xl={4}>
                                          <svg width="21" height="30" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.9405 30.0557V35.739C18.9395 36.0736 18.8061 36.3943 18.5695 36.6309C18.3329 36.8675 18.0122 37.0009 17.6776 37.0019H15.7832V30.6872C14.7126 30.0049 13.9442 28.9382 13.6361 27.7066C13.5137 27.3077 13.4208 26.9004 13.3583 26.4879C13.352 26.3995 13.3394 26.3174 13.3267 26.229C13.3015 26.0206 13.2825 25.8122 13.2762 25.6038C13.2636 25.4144 13.2573 25.2186 13.2573 25.0228V25.0039H13.8887C14.0996 25.0039 14.3106 25.0165 14.5202 25.0418C15.7413 25.1956 16.8642 25.79 17.6781 26.7132C18.4921 27.6364 18.9409 28.8249 18.9405 30.0557ZM9.46842 25.0039C9.46842 25.206 9.4621 25.408 9.44947 25.6038C9.44316 25.8122 9.42422 26.0143 9.39896 26.2163C9.34446 26.722 9.24083 27.2211 9.08953 27.7066C8.78149 28.9382 8.01312 30.0049 6.94252 30.6872V37.0019H5.0481C4.71346 37.0009 4.3928 36.8675 4.15617 36.6309C3.91954 36.3943 3.78616 36.0736 3.78516 35.739V30.0557C3.78473 28.8249 4.23362 27.6364 5.04753 26.7132C5.86144 25.79 6.98437 25.1956 8.20547 25.0418C8.41512 25.0165 8.62603 25.0039 8.83695 25.0039H9.46842Z" fill="#FDD7AD"/>
                                            <path d="M8.20826 27.53V30.0558C8.20826 30.2233 8.14173 30.3839 8.02331 30.5024C7.90488 30.6208 7.74426 30.6873 7.57679 30.6873H7.55784C7.39367 30.6824 7.23788 30.6137 7.12352 30.4958C7.00916 30.3779 6.94524 30.2201 6.94531 30.0558V27.53C6.94531 27.3625 7.01184 27.2019 7.13027 27.0834C7.24869 26.965 7.40931 26.8985 7.57679 26.8985C7.67865 26.8972 7.77898 26.9234 7.86726 26.9743C8.07628 27.081 8.20826 27.2957 8.20826 27.53ZM15.7859 27.53V30.0558C15.786 30.2201 15.7221 30.3779 15.6077 30.4958C15.4934 30.6137 15.3376 30.6824 15.1734 30.6873H15.1545C14.987 30.6873 14.8264 30.6208 14.708 30.5024C14.5895 30.3839 14.523 30.2233 14.523 30.0558V27.53C14.523 27.2957 14.655 27.081 14.864 26.9743C14.9523 26.9234 15.0526 26.8972 15.1545 26.8985C15.3219 26.8985 15.4826 26.965 15.601 27.0834C15.7194 27.2019 15.7859 27.3625 15.7859 27.53Z" fill="#F9C795"/>
                                            <path d="M13.26 25.0228V25.0039H13.8915C14.1024 25.0039 14.3133 25.0165 14.523 25.0418C14.5274 25.9069 14.6417 26.7689 14.864 27.6056C15.0505 28.3009 15.3113 28.9742 15.642 29.6137C15.735 29.7915 15.7844 29.9889 15.7859 30.1896V37.0019H6.94531V30.1908C6.94687 29.9902 6.99622 29.7927 7.08929 29.6149C7.42018 28.9752 7.68098 28.3015 7.86726 27.6056C8.08954 26.7689 8.20384 25.9069 8.20826 25.0418C8.41791 25.0165 8.62882 25.0039 8.83973 25.0039H9.47121L13.26 25.0228Z" fill="#3B97D3"/>
                                            <path d="M13.2576 23.1719V25.0031C13.2468 25.918 13.3745 26.8292 13.6365 27.7059C12.9161 28.006 12.1435 28.1605 11.3631 28.1605C10.5828 28.1605 9.81017 28.006 9.08984 27.7059C9.35176 26.8292 9.4795 25.918 9.46873 25.0031V23.1719H13.2576Z" fill="#F9C795"/>
                                            <path d="M3.16263 17.5069C3.16768 17.6856 3.19988 17.8618 3.25735 18.031C2.08807 17.9737 0.979449 17.4934 0.137867 16.6797C-0.0705189 16.4271 -0.0389452 16.0545 0.20733 15.8398C1.17386 15.0041 1.97312 13.9927 2.56273 12.8592L3.16263 17.5069ZM11.3655 8.27474C10.6961 8.9441 3.5352 9.72713 3.15631 10.5986V4.79532C3.15631 3.62298 3.62202 2.49865 4.45099 1.66968C5.27996 0.84071 6.40429 0.375 7.57663 0.375L10.734 0.375C11.5714 0.375 12.3745 0.70765 12.9666 1.29977C13.5587 1.89189 13.8914 2.69498 13.8914 3.53237" fill="#805333"/>
                                            <path d="M9.46987 4.7942H6.94397C6.7765 4.7942 6.61588 4.72767 6.49745 4.60924C6.37903 4.49082 6.3125 4.3302 6.3125 4.16272C6.3125 3.99525 6.37903 3.83463 6.49745 3.7162C6.61588 3.59778 6.7765 3.53125 6.94397 3.53125H9.46987C9.63735 3.53125 9.79796 3.59778 9.91639 3.7162C10.0348 3.83463 10.1013 3.99525 10.1013 4.16272C10.1013 4.3302 10.0348 4.49082 9.91639 4.60924C9.79796 4.72767 9.63735 4.7942 9.46987 4.7942Z" fill="#603E26"/>
                                            <path d="M18.9039 9.39279C19.7543 10.6443 20.2076 12.1232 20.2047 13.6363V14.8992C20.1752 15.7196 19.9546 16.5218 19.5606 17.242L12.627 18.6881C12.627 18.7133 3.15491 17.482 3.16186 17.5072C2.83917 16.9578 2.52344 15.8528 2.52344 13.6363C2.52344 13.3711 2.53607 13.1185 2.56133 12.8596V12.8533C2.7403 11.1223 3.50958 9.50573 4.73991 8.27509C5.44329 7.57044 6.27907 7.01185 7.19917 6.63145C8.11926 6.25106 9.1055 6.05638 10.1011 6.05861H12.627C13.0503 6.05906 13.4727 6.09497 13.89 6.16596C14.6604 6.291 15.4068 6.53853 16.1001 6.89847L18.9039 9.39279Z" fill="#A56A43"/>
                                            <path d="M13.8891 3.53125V6.16449C13.4718 6.0935 13.0494 6.0576 12.6261 6.05714H10.1002C9.88552 6.05714 9.67714 6.06346 9.46875 6.0824V3.53125H13.8891Z" fill="#FF5364"/>
                                            <path d="M19.574 7.95314C19.5713 8.45475 19.3709 8.93506 19.0162 9.28976C18.6615 9.64446 18.1812 9.8449 17.6796 9.84756C17.1771 9.84756 16.6953 9.64797 16.34 9.29269C15.9847 8.93742 15.7852 8.45557 15.7852 7.95314C15.7862 7.57848 15.8959 7.21216 16.1009 6.89858C16.3274 6.56107 16.6564 6.30524 17.0393 6.16875C17.4222 6.03227 17.8388 6.02235 18.2277 6.14045C18.6167 6.25855 18.9575 6.49843 19.1998 6.82477C19.4422 7.15111 19.5733 7.54664 19.574 7.95314Z" fill="#DF4D60"/>
                                            <path d="M19.5748 17.4253C19.5748 17.9278 19.3752 18.4096 19.02 18.7649C18.6647 19.1202 18.1828 19.3198 17.6804 19.3198C17.5615 19.32 17.4429 19.3073 17.3268 19.2819C16.7521 21.0184 14.8388 22.4266 13.2601 23.1717C12.6711 23.4814 12.0278 23.6744 11.3657 23.7401C10.7035 23.6744 10.0602 23.4814 9.47124 23.1717C7.89256 22.4266 5.9792 21.0184 5.40455 19.2819C5.2884 19.3073 5.16983 19.32 5.05093 19.3198C4.65469 19.3201 4.26837 19.196 3.94655 18.9648C3.62473 18.7336 3.38371 18.4072 3.25754 18.0316C3.20002 17.8625 3.1681 17.6859 3.16282 17.5074C3.15758 17.4804 3.15547 17.4529 3.15651 17.4253C3.15651 16.9229 3.3561 16.4411 3.71137 16.0858C4.06664 15.7305 4.5485 15.5309 5.05093 15.5309C5.05181 14.8703 5.28927 14.2318 5.72029 13.7312C6.14943 13.2309 6.74699 12.9052 7.40001 12.8156C9.54071 12.5251 12.4834 11.7737 13.2601 9.84766C13.7125 11.0177 14.5993 11.9679 15.7355 12.4998C16.3135 12.7689 16.8032 13.1967 17.1475 13.7333C17.4919 14.2699 17.6767 14.8933 17.6804 15.5309C18.1831 15.5309 18.6642 15.7311 19.0191 16.0866C19.3311 16.396 19.5237 16.8052 19.5622 17.2422C19.5729 17.3028 19.5767 17.3641 19.5748 17.4253Z" fill="#FDD7AD"/>
                                          </svg>
                                        </Grid>
                                        <Grid item xs={12} s={12} md={12} l={12} xl={12}><h1>$25.00</h1></Grid>
                                            <Grid item xs={12} s={12} md={12} l={12} xl={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <p style={{ textAlign: "center" }}>
                                                    It’ll cover both of couple fees for one time included the test taken before test and a 1-hour meeting with your coach
                                                </p>
                                            </Grid>
                                        <Grid item xs={12} s={12} md={12} l={12} xl={12}>
                                            <ul>
                                                <li>1-hour session</li>
                                                <li>Color diagnostic test</li>
                                                <li>personality test results</li>
                                            </ul>  
                                        </Grid>
                                        {/* <Grid item xs={12} s={12} md={12} l={12} xl={12}>
                                            <button>Get started today</button>
                                        </Grid> */}
                                    </Grid>
                                </button>
                                <button className={classes.getStartedBtn3}>Get started today</button>
                            </button>
                        </Grid>
                    </Grid>
                </main>
           </Grid>

        </div>
    );
};

export default Payment;

// {tiers.map(tier => (
//     // Enterprise card is full width at sm breakpoint
//     <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
//         <Card>
//             <CardHeader
//                 title={tier.title}
//                 subheader={tier.subheader}
//                 titleTypographyProps={{ align: 'center' }}
//                 subheaderTypographyProps={{ align: 'center' }}
//                 action={tier.title === 'Pro' ? <StarIcon /> : null}
//                 className={classes.cardHeader}
//             />
//             <CardContent>
//             <div className={classes.cardPricing}>
//                 <Typography component="h2" variant="h3" color="textPrimary">
//                     ${tier.price}
//                 </Typography>
//                 <Typography variant="h6" color="textSecondary">
//                     /mo
//                 </Typography>
//             </div>
//             {tier.description.map(line => (
//                 <Typography variant="subtitle1" align="center" key={line}>
//                     {line}
//                 </Typography>
//             ))}
//             </CardContent>
//             <CardActions className={classes.cardActions}>
//                 <Button fullWidth variant={tier.buttonVariant} color="primary">
//                     {tier.buttonText}
//                 </Button>
//             </CardActions>
//         </Card>
//     </Grid>
// ))}