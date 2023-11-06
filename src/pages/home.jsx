import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard, SponsorCard } from "@/widgets/cards";
import { featuresData, teamData, sponsorData } from "@/data";
import Carousel from "react-multi-carousel";
import Countdown from "react-countdown";
import "react-multi-carousel/lib/styles.css";


export function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return 'Complete!';
    } else {
      // Render a countdown
      return (
        <span className=" text-white origintech text-3xl">
          {days}<span className=" text-blue-400">Days{' '}</span>:{hours}<span className=" text-blue-400">Hours{' '}</span>:{minutes}<span className=" text-blue-400">Minutes{' '}</span>{seconds}:<span className=" text-blue-400">Seconds</span>
        </span>
      );
    }
  };
  
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                color="white"
                className="mb-6 origintech text-6xl"
              >
                Crypto Expo Dubai  2023.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Date: December 28, 2023 at 6:30 PM. Place - Dubai, ATLANTIS, THE PALM
              </Typography>
              <Countdown date={Date.now() + 500000000} renderer={renderer} />
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              {/* <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div> */}
              <Typography
                className="mb-3 origintech text-5xl"
                color="blue-gray"
              >
                About Event
              </Typography>
              <br />
              <Typography className="mb-8 font-normal text-blue-gray-500">
                GitCoinExpo is a premier blockchain conference network that brings together influential figures and industry experts to reshape the future of finance.
                The upcoming edition of GitCoinExpo is scheduled to take place in Dubai on DECEMBER 28, 2023, featuring the participation of the world's leading crypto companies and blockchain entrepreneurs.
                As Dubai emerges as a global crypto hub, GitCoinExpo serves as the gathering point for the worldwide community interested in blockchain and cryptocurrency, offering engaging discussions on cutting-edge financial technologies.
                Attendees can expect extensive networking opportunities and participation from over 40 countries, making it a truly global event.
              </Typography>
              {/* <Button variant="outlined">read more</Button> */}
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="mt-32 flex flex-wrap items-center container mx-auto">
          <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
            <Card className="shadow-lg shadow-gray-500/10">
              <CardHeader className="relative h-56">
                <img
                  alt="Card Image"
                  src="/img/teamwork.jpeg"
                  className="h-full w-full"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-3 font-bold"
                >
                  Identifying the gamechanging trends in the web 3.0 ecosystem 
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  The Arctic Ocean freezes every winter and much of the
                  sea-ice then thaws every summer, and that process will
                  continue whatever happens.
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className="mx-auto -mt-8 w-full px-4 md:w-7/12">
            <Typography
              className="mb-3 origintech text-5xl"
              color="blue-gray"
            >
              Discussion Topics
            </Typography>
            <br />
            <Typography className="mb-8 font-normal text-blue-gray-500">
              <span className=" text-blue-400">1.</span>WHAT WEB 3.0 MEANS FOR ENTERPRISES (Fred Zhou)<br />
              <span className=" text-blue-400">2.</span>VALUE CREATION IN THE METAVERSE (Adrian Zduńczyk)<br />
              <span className=" text-blue-400">3.</span>THE ROLE OF STABLECOINS IN A DECENTRALIZED ECOSYSTEM (Victoria Scholar)<br />
              <span className=" text-blue-400">4.</span>DAOS: NEW BREED OF INTERNET-NATIVE ORGANIZATIONS (Stephen Lindsay)<br />
              <span className=" text-blue-400">5.</span>MAXIMIZING ESG IMPACT WITH BLOCKCHAIN (Daniel Antcliff)<br />
              <span className=" text-blue-400">6.</span>BRIDGING DEFI AND CEFI (Ilyas Vali)<br />
              <span className=" text-blue-400">7.</span>WEB 3 GAMING: THE NEW FRONTIER? (Russell Armand)<br />
              <span className=" text-blue-400">8.</span>DECRYPTING THE REGULATORY LANDSCAPE OF VIRTUAL ASSETS (Danny Winn)<br />
              <span className=" text-blue-400">9.</span>CENTRAL BANK DIGITAL CURRENCIES, AND CROSS-BORDER PAYMENTS (Lex Sokolin)<br />
              <span className=" text-blue-400">10.</span>WEB 3: THE FUTURE IS HERE AND NOW (Pieter Vanhove)<br />
              <span className=" text-blue-400">11.</span>NFT MARKET OVERVIEW: TRENDS & OPPORTUNITIES (Lennix Lai)<br />
              <span className=" text-blue-400">12.</span>INTEROPERABILITY - CHALLENGES AND OPPORTUNITIES (Delphine Forma)
            </Typography>
            {/* <Button variant="outlined flex items-center"><UsersIcon className="h-6 w-6 text-blue-white-900 inline-block mr-2" />Register Now</Button> */}
          </div>
        </div>
      </section>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="mt-32 flex flex-wrap items-center container mx-auto">
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
            <Typography
              className="mb-3 origintech text-5xl"
              color="blue-gray"
            >
              2023 HIGHLIGHTS
            </Typography>
            <br />
            <Typography className="mb-8 font-normal text-blue-gray-500">
              Check out the Dubai's Largest Crypto Expo Investing and Trading Conference for two days of content-rich experience, real-time networking, engaging discussions, and resounding success.
            </Typography>
            {/* <Button variant="outlined flex items-center"><UsersIcon className="h-6 w-6 text-blue-white-900 inline-block mr-2" />Register Now</Button> */}
          </div>
          <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
            <Card className="shadow-lg shadow-gray-500/10">
              <CardHeader className="relative h-56">
                <img
                  alt="Card Image"
                  src="/img/teamwork.jpeg"
                  className="h-full w-full"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-3 font-bold"
                >
                  Top Notch Services
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  The Arctic Ocean freezes every winter and much of the
                  sea-ice then thaws every summer, and that process will
                  continue whatever happens.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="2023 Speakers">
            More speakers Will be added soon
          </PageTitle>
          <div className="mt-24">
            <Carousel responsive={responsive}>
              {teamData.map(({ img, name, position, socials }) => (
                <TeamCard
                  key={name}
                  img={img}
                  name={name}
                  position={position}
                  socials={
                    <div className="flex items-center gap-2">
                      {socials.map(({ color, name }) => (
                        <IconButton key={name} color={color} variant="text">
                          <i className={`fa-brands text-lg fa-${name}`} />
                        </IconButton>
                      ))}
                    </div>
                  }
                />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Our sponsors">
            
          </PageTitle>
          <div className="mt-24">
            <Carousel responsive={responsive}>
              {sponsorData.map(({ img, name, position, socials }) => (
                <SponsorCard
                  key={name}
                  img={img}
                  name={name}
                  position={position}
                  socials={
                    <div className="flex items-center gap-2">
                      {socials.map(({ color, name }) => (
                        <IconButton key={name} color={color} variant="text">
                          <i className={`fa-brands text-lg fa-${name}`} />
                        </IconButton>
                      ))}
                    </div>
                  }
                />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          {/* <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div> */}
          <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
