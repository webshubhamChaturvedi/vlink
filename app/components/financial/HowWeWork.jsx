import React from "react";

const HowWeWork = ({ section }) => {

  return (
    <section className="md:py-[55px] py-[30px] bg-[url('/img/h3-bg-section.jpg')] bg-cover bg-left bg-no-repeat">
      <div className="container">
        <div className="text-center mb-[45px]">
          <p className="text-[#212121] text-[24px] font-[600] font-sans mb-4">
            {section?.title}
          </p>
          <h5 className="xl:text-4xl lg:text-[32px] text-[22px] font-bold">
            <span className="text-company">{section?.h1_purple}</span> -
            {section?.h1_black}
          </h5>
        </div>
        <div>
          <div className="work-item-wrap">
            <div className="work-line-shape">
              <div className="work-line-shape">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1171.529"
                  height="170.91"
                  viewBox="0 0 1171.529 170.91"
                >
                  <g fill="none" strokeWidth="3">
                    <path
                      className="dashed1"
                      stroke="rgba(0 0 0 / 8%)"
                      strokeDasharray="12 6"
                      fillRule="evenodd"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      d="M376.374,5011.81s156,76.64,373.016-32.76c0,0,234.427-134.13,381.43-16.05,0,0,212.18,134.13,410.49-90.01"
                      transform="translate(-373.531 -4871.5)"
                    ></path>
                    <path
                      className="dashed2"
                      stroke="white"
                      strokeDasharray="12 6"
                      fillRule="evenodd"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      d="M376.374,5011.81s156,76.64,373.016-32.76c0,0,234.427-134.13,381.43-16.05,0,0,212.18,134.13,410.49-90.01"
                      transform="translate(-373.531 -4871.5)"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-line">
              {section?.working_process_steps?.map((item, index) => (
                <div className="px-[10px]" key={index}>
                  <div
                    className={`work-item ${
                      index === 0
                        ? "process-one"
                        : index === 1
                        ? "process-two process-reverce"
                        : index === 2
                        ? "process-three"
                        : index === 3
                        ? "process-four process-reverce"
                        : ""
                    }  process-div`}
                  >
                    <div className="process-img">
                      <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="240.000000pt"
                        height="240.000000pt"
                        viewBox="0 0 240.000000 240.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)"
                          fill=""
                          stroke="none"
                        >
                          <path
                            d="M227 2393 c-4 -3 -7 -388 -7 -855 l0 -848 35 0 35 0 0 820 0 820 740
                     0 740 0 -2 -522 c-2 -336 -7 -522 -13 -525 -5 -1 -18 11 -27 27 -9 17 -29 35
                     -43 42 l-25 11 0 429 0 428 -125 0 -125 0 0 -35 0 -35 95 0 95 0 0 -385 c0
                     -370 -1 -385 -19 -395 -39 -20 -41 -14 -41 120 0 147 -9 178 -63 210 -20 13
                     -50 20 -80 20 -40 0 -53 -5 -85 -34 l-37 -34 -5 -164 -5 -163 -397 -3 -398 -2
                     0 415 0 415 430 0 430 0 0 35 0 35 -465 0 -465 0 0 -485 0 -485 435 0 c362 0
                     435 -2 435 -14 0 -7 -3 -28 -6 -45 -6 -29 -9 -31 -51 -31 -60 0 -109 -23 -133
                     -62 -18 -30 -20 -50 -20 -256 l0 -222 55 -110 c30 -60 55 -112 55 -115 0 -3
                     -11 -5 -25 -5 l-25 0 0 -160 0 -160 -415 0 -415 0 0 270 0 270 -35 0 -35 0 2
                     -303 3 -302 968 -3 967 -2 0 195 c0 188 -1 195 -20 195 -26 0 -26 11 11 149
                     l30 116 -3 240 c-3 266 -5 275 -71 316 -32 20 -100 23 -137 6 -10 -5 -21 3
                     -32 24 -11 18 -34 37 -58 47 l-40 17 0 548 0 547 -803 0 c-442 0 -807 -3 -810
                     -7z m1208 -739 c42 -16 45 -46 45 -414 l0 -350 30 0 30 0 0 183 c1 191 3 202
                     48 226 31 17 80 -3 93 -36 5 -13 9 -103 9 -199 l0 -174 30 0 30 0 0 146 0 146
                     30 30 c25 24 36 29 58 23 55 -13 62 -35 62 -197 l0 -148 29 0 29 0 4 116 c3
                     113 4 116 32 141 33 28 70 25 99 -9 15 -18 17 -46 17 -256 0 -234 0 -238 -32
                     -364 l-33 -128 -262 0 -263 0 0 -30 0 -30 258 -2 c141 -1 269 -2 285 -1 l27 1
                     0 -129 0 -129 -450 0 -451 0 3 128 3 127 45 0 c25 1 82 2 128 3 l82 2 0 30 0
                     30 -100 0 -100 0 -65 130 -65 130 0 189 c0 123 4 199 12 216 12 26 70 49 111
                     43 21 -3 22 -7 25 -160 l3 -158 29 0 30 0 0 415 0 416 25 24 c24 25 49 31 80
                     19z"
                          />
                          <path
                            d="M1880 195 c0 -32 2 -35 30 -35 28 0 30 3 30 35 0 32 -2 35 -30 35
                     -28 0 -30 -3 -30 -35z"
                          />
                          <path
                            d="M1079 1859 l-112 -130 -46 65 c-25 36 -49 65 -52 66 -4 0 -17 -8 -29
                     -18 l-23 -18 74 -102 c70 -96 75 -101 89 -83 8 11 70 85 138 165 68 80 121
                     150 117 156 -3 5 -15 14 -25 20 -17 9 -34 -7 -131 -121z"
                          />
                          <path
                            d="M790 1450 c0 -27 3 -30 30 -30 27 0 30 3 30 30 0 27 -3 30 -30 30
                     -27 0 -30 -3 -30 -30z"
                          />
                          <path
                            d="M930 1450 c0 -27 3 -30 30 -30 27 0 30 3 30 30 0 27 -3 30 -30 30
                     -27 0 -30 -3 -30 -30z"
                          />
                          <path
                            d="M1070 1450 c0 -27 3 -30 30 -30 27 0 30 3 30 30 0 27 -3 30 -30 30
                     -27 0 -30 -3 -30 -30z"
                          />
                          <path
                            d="M383 1093 c-31 -6 -34 -63 -3 -63 20 0 20 -7 20 -289 l0 -290 70 29
                     69 28 65 -20 64 -21 56 21 56 21 65 -24 c36 -14 70 -25 75 -25 6 0 10 106 10
                     285 0 278 0 285 20 285 15 0 20 7 20 29 0 24 -5 29 -31 35 -35 7 -520 6 -556
                     -1z m477 -303 c0 -132 -2 -240 -4 -240 -2 0 -20 7 -39 15 -33 14 -40 13 -92
                     -7 l-55 -21 -67 20 c-60 18 -71 19 -100 6 l-33 -13 0 240 0 240 195 0 195 0 0
                     -240z"
                          />
                          <path d="M560 900 l0 -30 105 0 105 0 0 30 0 30 -105 0 -105 0 0 -30z" />
                          <path d="M560 725 l0 -35 105 0 105 0 0 35 0 35 -105 0 -105 0 0 -35z" />
                        </g>
                      </svg>
                      <h4 className="number">{item?.no}</h4>
                    </div>
                    <div className="text-center mt-[15px] mb-[40px]">
                      <h6 className="text-[#000B1D] xl:text-[24px] text-[20px] font-sans font-[600] mb-[20px]">
                        {item?.h1}
                      </h6>
                      <p className="text-[#585858] xl:text-[16px] text-[14px] font-sans font-[400] max-w-[330px]">
                        {item.p1}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
