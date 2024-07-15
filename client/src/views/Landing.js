import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <>
      <main>
        <div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
          </div>
        </div>

        <section className="pb-20 mt-24">
          <div className="container items-center flex gap-12 px-4 mb-24 mt-8">


            <img
              alt="..."
              src="/assets/images/banks.png"
              className="rounded-t-lg px-12"
            />

            <div className="">
              <h3 className="text-4xl mb-3 font-semibold leading-normal">
                Empower Your Financial Future!
              </h3>
              <div className="">
                <p className="text-lg font-light mt-2 mb-3 text-gray-700">
                  Simplifying your banking experience while safeguarding your assets.<br /> Your reliable partner in building a prosperous tomorrow.
                </p>
                <div className="">
                  <Button
                    component={Link}
                    to="/add"
                    color="primary"
                    variant="contained"
                    size="large"
                    style={{ marginRight: '16px' }}
                  >
                    Get Started
                  </Button>

                  <Button
                    component={Link}
                    to="/add"
                    color="primary"
                    variant="outlined"
                    size="large"
                  >
                    Get Started
                  </Button>
                </div>

              </div>

            </div>


          </div>
        </section>

        <section className="pb-8 mt-24">
          <div style={{ backgroundColor: '#3345A1' }}>
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap"></div>
              <div className="flex flex-wrap items-center mt-32">
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto primary">
                  <h3 className="text-3xl mb-2 font-semibold leading-normal" style={{ color: 'white' }}>
                    Services
                  </h3>
                  <ol className="text-white list-decimal text-lg font-light leading-relaxed mt-4 mb-24">
                    <li>Deposit Services: Safely store money and earn interest.</li>
                    <li>Loan and Credit Services: Provide funds for personal or business needs with repayment terms.</li>
                    <li>Investment and Wealth Management Services: Help manage and grow finances through investments.</li>
                    <li>Risk Management and Insurance Services: Protect assets and manage financial risks.</li>
                    <li>Business Banking Services: Support financial needs of businesses, from accounts to loans.</li>
                  </ol>
                </div>

                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg">
                    <img
                      alt="..."
                      src="/assets/images/services.png"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap"></div>
            <div className="flex flex-wrap items-center mt-32">

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="./assets/images/aboutus.png"
                    className="w-full align-middle rounded-t-lg"
                  />
                </div>
              </div>

              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  About Us
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 max-w-prose mx-auto text-justify">
                  Welcome to Bank System, your trusted partner in financial success since 1999. We offer a comprehensive range of personal and business banking services, including investment and wealth management, tailored to meet your unique needs. With a focus on integrity, customer satisfaction, and community support, we strive to build long-lasting relationships and make a positive impact.
                </p>
              </div>

            </div>
          </div>
        </section>


      </main >
    </>
  );
}
