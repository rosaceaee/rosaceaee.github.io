import React, { useCallback, useRef, useState, useEffect } from "react";
import {
  Redirect,
  useHistory,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import useMultilingual, { LanguageType } from "./useMultilingual";
import Header from "./Header";
import Works from "./pages/Works";
import "./styles/new_common.scss";

const NewMain = () => {
  const [lang, setLang] = useState("ko");
  const m = useMultilingual(lang);
  const changeLang = ({ target: { value } }) => {
    return value && setLang(value);
  };

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  const tabWork = useRef(null);

  function LangBoxx({ setLang }) {
    return (
      <>
        <div className="set-lang-btn" onClick={changeLang}>
          <button value={"ko"}>한국어</button>
          <button value={"en"}>ENG</button>
          <button value={"ja"}>JA</button>
        </div>
      </>
    );
  }
  function height() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.addEventListener("scroll", function () {
      document.addEventListener("scroll", function () {
        let current = document.documentElement.scrollTop;
        let colorValue = Math.round(current / 30);
        let box = document.getElementById("main");

        box.style.background = `rgb(${colorValue + 40},${colorValue + 30},${
          colorValue + 10
        })`;
      });

      // box.style.backgroundImage = `linear-gradient(to bottom, ${colorValue})`;
    });
  }
  document.addEventListener("DOMContentLoaded", height());

  const Sibal = () => {
    return (
      <>
        <div
          style={{
            position: "relative",
            background: "#333",
            width: "100%",
            height: "100vh",
          }}
        >
          <svg className="spinner" viewBox="0 0 50 50">
            <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="#fff"
              strokeWidth="5"
            ></circle>
          </svg>
        </div>
      </>
    );
  };

  function MainBox() {
    return (
      <>
        <main id="main">
          <LangBoxx />
          <section className="nav-wrap">
            <div className="left-nav">
              <h3>Top</h3>
              <h3 onClick={() => scrollDown(tabWork)}>app </h3>
              <h3>contact</h3>
            </div>
          </section>
          <section className="main-center-con">
            <div style={{ display: "flex", justifyContent: "center" }}>dd</div>
            <div className="me">
              <h1 className="greeting">web developer </h1>
              <span>
                who loves make anything <br />
                who loves make anything who loves make anything
              </span>

              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <h3>Working With...</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="css3-simple"
                >
                  <path
                    fill="#6563FF"
                    d="M20.772,3.36426A1.00062,1.00062,0,0,0,20,3H6A1,1,0,0,0,6,5H18.78613l-.78094,4H5a1,1,0,0,0,0,2H17.61475l-1.1626,5.95508-6.32324,1.99658L4.71875,17.25244l.20361-1.06494a1.00015,1.00015,0,0,0-1.96484-.375L2.5874,17.75244A1.00059,1.00059,0,0,0,3.27,18.894L9.83008,20.9541a1.00175,1.00175,0,0,0,.60107-.00049l7.18994-2.27a1.00064,1.00064,0,0,0,.68018-.7622l2.68018-13.73A1.00008,1.00008,0,0,0,20.772,3.36426Z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="java-script"
                >
                  <path
                    fill="#6563FF"
                    d="M14.478,14.8829a4.06111,4.06111,0,0,1-2.18725-.39825,1.4389,1.4389,0,0,1-.53547-1.01019.22184.22184,0,0,0-.22662-.21942c-.31659-.00385-.63312-.003-.94965-.00043a.2113.2113,0,0,0-.23138.18628,2.33854,2.33854,0,0,0,.75305,1.84454,3.99135,3.99135,0,0,0,2.22827.8382,8.06151,8.06151,0,0,0,2.53308-.10755,3.12591,3.12591,0,0,0,1.67823-.90442,2.33824,2.33824,0,0,0,.396-2.23077,1.869,1.869,0,0,0-1.2304-1.09454c-1.28077-.4494-2.66431-.41541-3.97-.7569-.22668-.07135-.50366-.1488-.60467-.38879a.85461.85461,0,0,1,.28418-.95478,2.5576,2.5576,0,0,1,1.34875-.33581,4.07051,4.07051,0,0,1,1.88416.26959,1.43564,1.43564,0,0,1,.68677.99219.243.243,0,0,0,.2276.23565c.31433.00641.62878.00171.94311.00214a.22791.22791,0,0,0,.24732-.16772,2.43369,2.43369,0,0,0-1.18665-2.106,5.8791,5.8791,0,0,0-3.2182-.49243V8.08341a3.50546,3.50546,0,0,0-2.17615.87438,2.1746,2.1746,0,0,0-.43438,2.26264,1.92964,1.92964,0,0,0,1.21838,1.06177c1.27649.46106,2.67554.31311,3.96442.72082.25116.08521.54364.21552.6206.49506a.9907.9907,0,0,1-.26965.94616A2.97065,2.97065,0,0,1,14.478,14.8829Zm5.81891-8.44537q-3.73837-2.114-7.47845-4.22418a1.67742,1.67742,0,0,0-1.63733,0Q7.4556,4.31715,3.72968,6.42075a1.54242,1.54242,0,0,0-.8042,1.34271V16.2377a1.55266,1.55266,0,0,0,.8352,1.355c.71351.38837,1.40674.81629,2.13318,1.17884a3.06373,3.06373,0,0,0,2.73822.07525,2.1275,2.1275,0,0,0,.99482-1.92114c.00555-2.79669.00085-5.59351.00213-8.39026a.21981.21981,0,0,0-.20727-.25415c-.31739-.00513-.63526-.003-.95264-.00085a.20935.20935,0,0,0-.228.21368c-.00427,2.77875.00086,5.55829-.00256,8.33746a.94053.94053,0,0,1-.609.88373,1.53242,1.53242,0,0,1-1.23993-.16595q-.99152-.56-1.983-1.11988a.23714.23714,0,0,1-.13464-.23529q0-4.19383,0-8.38726a.2589.2589,0,0,1,.157-.2602Q8.1423,5.4553,11.85419,3.35953a.258.258,0,0,1,.29163.00043Q15.859,5.452,19.57184,7.5455a.262.262,0,0,1,.15613.26142Q19.72733,12,19.72712,16.19376a.242.242,0,0,1-.13294.23828q-3.65643,2.06753-7.31677,4.12909c-.11658.06494-.25458.16943-.39093.09076-.6391-.36176-1.27039-.73755-1.90735-1.10273a.20589.20589,0,0,0-.22968-.01379,5.21834,5.21834,0,0,1-.88208.41162c-.13806.05591-.30792.07184-.40295.19989a1.31566,1.31566,0,0,0,.43127.31061q1.11741.647,2.236,1.29285a1.62967,1.62967,0,0,0,1.65539.046q3.7261-2.101,7.45185-4.20392a1.55627,1.55627,0,0,0,.83563-1.35474V7.76346A1.53956,1.53956,0,0,0,20.29694,6.43753Z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="react"
                >
                  <path
                    fill="#6563FF"
                    d="M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z"
                  ></path>
                </svg>
              </div>
            </div>
          </section>
          <section className="main-center-con worklist-con" ref={tabWork}>
            <p>dd</p>
            <Works />
          </section>
        </main>
      </>
    );
  }

  function BeforeShow() {
    const [isHide, setIsHide] = useState(false);

    // setTimeout(() => setIsHide(false), 1000);

    useEffect(() => {
      setInterval(() => {
        setIsHide(true);
      }, 100);
    }, []);
    return (
      <main>
        {!isHide ? <Sibal /> : <MainBox />}{" "}
        <footer>
          <h5>footer</h5>
        </footer>
      </main>
    );
  }

  document.addEventListener("DOMContentLoaded", BeforeShow);
  return (
    <>
      <BeforeShow />
    </>
  );
};

export default NewMain;
