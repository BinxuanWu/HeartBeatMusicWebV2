import React from 'react'
import "./Body.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Container, Row, Col, Card} from 'react-bootstrap'
import { duration } from '@mui/material';

const slideImages = [
    {
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Cp8P67FzRg_4rqfNqfCyoAHaCe%26pid%3DApi&f=1',
      caption: 'Slide 1'
    },
    {
        
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pLiHxqpAD30YAOdbjOG80AHaEK%26pid%3DApi&f=1',
        caption: 'Slide 2'
    },
    {
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hcVnbNPmyHRuN6wY0u3EQwHaE8%26pid%3DApi&f=1',
      caption: 'Slide 3'
    },
    {
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.vZBp7l_C56JwH5CqX0YF6wHaEK%26pid%3DApi&f=1',
        caption: 'Slide 4'
      },
  ];




const Body = ({setPlayingSong}) => {


  return (
    <div className='body'>
        <br/>

        <div>
        <div className="slideshow-container">
            <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div className="each-slide" key={index}>
                        <div className = "slide-image" style={{'backgroundImage': `url(${slideImage.url})`}}>
                        </div>
                    </div>
                    ))}
            </Slide>
        </div>
        </div>
        

        <br/>


        <div>
            <Tabs>
                <TabList>
                  <Tab>Recommended</Tab>
                  <Tab>Featured this Week</Tab>
                  <Tab>Genre</Tab>
                  <Tab>Country</Tab>
                </TabList>

                <TabPanel>

                    <Container>
                      <Row>
                          {recommended1?.map((alb) => 
                            <Col>
                              <Card onClick = {() => setPlayingSong({img:alb.url,title:alb.title,author:alb.author, duration:alb.duration})}>
                                  <Card.Img className="card-img" src={alb.url} />
                                  <Card.Title className="card-title">{alb.title}</Card.Title>
                                  <Card.Text>{alb.author}</Card.Text>
                              </Card>
                            </Col>

                          )}
                      </Row>
                      <br/>
                      <Row>
                        {recommended2?.map((alb) => 
                              <Col>
                                <Card onClick = {() => setPlayingSong({img:alb.url,title:alb.title,author:alb.author, duration:alb.duration})}>
                                    <Card.Img className="card-img" src={alb.url}/>
                                    <Card.Title className="card-title">{alb.title}</Card.Title>
                                    <Card.Text>{alb.author}</Card.Text>
                                </Card>
                              </Col>

                            )}
                      </Row>
                    </Container>
                </TabPanel>

                <TabPanel>
                    <Row>
                        {featureWeek?.map((alb) => 
                              <Col>
                                <Card onClick = {() => setPlayingSong({img:alb.url,title:alb.title,author:alb.author, duration:alb.duration})}>
                                    <Card.Img className="card-img" src={alb.url}/>
                                    <Card.Title className="card-title">{alb.title}</Card.Title>
                                    <Card.Text>{alb.author}</Card.Text>
                                </Card>
                              </Col>

                            )}
                      </Row>
                </TabPanel>

                <TabPanel>
                    <div>
                      <div className='genere-title'>
                            <h2>Hip Pop</h2>
                      </div>
                      <Row>
                        {hippop?.map((alb) => 
                              <Col>
                                <Card onClick = {() => setPlayingSong({img:alb.url,title:alb.title,author:alb.author, duration:alb.duration})}>
                                    <Card.Img className="card-img" src={alb.url}/>
                                    <Card.Title className="card-title">{alb.title}</Card.Title>
                                    <Card.Text>{alb.author}</Card.Text>
                                </Card>
                              </Col>

                            )}
                      </Row>
                    </div>
                    <br/>
                    <div>
                      <div className='genere-title'>
                            <h2>R&B</h2>
                      </div>
                      <Row>
                        {rb?.map((alb) => 
                              <Col>
                                <Card onClick = {() => setPlayingSong({img:alb.url,title:alb.title,author:alb.author, duration:alb.duration})}>
                                    <Card.Img className="card-img" src={alb.url}/>
                                    <Card.Title className="card-title">{alb.title}</Card.Title>
                                    <Card.Text>{alb.author}</Card.Text>
                                </Card>
                              </Col>

                            )}
                      </Row>
                    </div>
                    <br/>
                    <div>
                      <div className='genere-title'>
                            <h2>Rock</h2>
                      </div>
                      <Row>
                        {rock?.map((alb) => 
                              <Col>
                                <Card onClick = {() => setPlayingSong({img:alb.url,title:alb.title,author:alb.author, duration:alb.duration})}>
                                    <Card.Img className="card-img" src={alb.url}/>
                                    <Card.Title className="card-title">{alb.title}</Card.Title>
                                    <Card.Text>{alb.author}</Card.Text>
                                </Card>
                              </Col>

                            )}
                      </Row>
                    </div>
                    

                </TabPanel>

                <TabPanel>
                <div>
                      <div className='genere-title'>
                            <h2>China</h2>
                      </div>
                      <Row>
                        {china?.map((alb) => 
                              <Col>
                                <Card onClick = {() => setPlayingSong({img:alb.url,title:alb.title,author:alb.author, duration:alb.duration})}>
                                    <Card.Img className="card-img" src={alb.url}/>
                                    <Card.Title className="card-title">{alb.title}</Card.Title>
                                    <Card.Text>{alb.author}</Card.Text>
                                </Card>
                              </Col>

                            )}
                      </Row>
                      <br/>
                      <div className='genere-title'>
                            <h2>Japan</h2>
                      </div>
                      <Row>
                        {japan?.map((alb) => 
                              <Col>
                                <Card onClick = {() => setPlayingSong({img:alb.url,title:alb.title,author:alb.author, duration:alb.duration})}>
                                    <Card.Img className="card-img" src={alb.url}/>
                                    <Card.Title className="card-title">{alb.title}</Card.Title>
                                    <Card.Text>{alb.author}</Card.Text>
                                </Card>
                              </Col>

                            )}
                      </Row>
                    </div>
                </TabPanel>
            </Tabs>
            <br/><br/><br/><br/><br/>
        </div>


        
    </div>
  )
}

export default Body

const recommended1 = [
    {url:'https://www.game-ost.com/static/covers_soundtracks/2/2/22508_551213_small.jpg',
    title: 'Tell You World',
    author: 'Hatsune Miku  / kz',
    duration: 249},
    {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.JtwyYZM-G7Ix7cLO8sPj4AHaHa%26pid%3DApi&f=1',
    title: 'world.execute(me);',
    author: 'Mili',
    duration: 303},
    {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-pT1CkqubagW6oE6eHtjeQHaHa%26pid%3DApi&f=1',
    title: 'Imaginaerum',
    author:'Nightwish',
    duration: 311},
    {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.klI-55zR9CHvjXnbgxu4NAHaHa%26pid%3DApi&f=1',
    title: 'Legends Dever Die',
    author: 'Against the Current',
    duration: 432},
  
 ]

 const recommended2 = [
    {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.1U3o-oR_y7nRTnBeN6i6agHaHa%26pid%3DApi&f=1',
    title: 'Sun Dance',
    author: 'Aimer',
    duration: 238},
    {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1M48qau_5M9KxCxsy_qyMgHaHa%26pid%3DApi&f=1',
    title: 'Sing Me To Sleep',
    author: 'Alan Walker',
    duration: 542},
    {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AxLou0pmmP_SeBsq2jV9agHaHa%26pid%3DApi&f=1',
    title: 'Spitfire',
    author: 'Go2',
    duration: 423},
    {url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.aalecqhVphOgoYa0hBSYGwHaHa%26pid%3DApi&f=1",
    title: "Sakura",
    author: "R3HAB",
    duration:452}

 ]

const featureWeek = [
    {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Exzc2z8K3f3EA0KJj3BdEAHaHa%26pid%3DApi&f=1',
    title: '最伟大的作品',
    author: 'Jay Chou',
    duration: 323},
    {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AxLou0pmmP_SeBsq2jV9agHaHa%26pid%3DApi&f=1',
    title: 'Spitfire',
    author: 'Go2',
    duration: 429},
    {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.klI-55zR9CHvjXnbgxu4NAHaHa%26pid%3DApi&f=1',
    title: 'Legends Dever Die',
    author: 'Against the Current',
    duration: 329},
    {url:'https://www.game-ost.com/static/covers_soundtracks/2/2/22508_551213_small.jpg',
    title: 'Tell You World',
    author: 'Hatsune Miku  / kz',
    duration: 342},
    {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.1U3o-oR_y7nRTnBeN6i6agHaHa%26pid%3DApi&f=1',
    title: 'Sun Dance',
    author: 'Aimer',
    duration: 482},
  
 ]

 const hippop = [
    {url:'https://uproxx.com/wp-content/uploads/2022/01/babyface-ray-face.jpg?resize=768,768',
    title:'Face',
    author:'Babyface Ray',
    duration: 324},
    {url:'https://uproxx.com/wp-content/uploads/2022/06/big-krit-digital-roses-dont-die.jpeg?resize=768,768',
    title:'Digital Roses Don’t Die',
    author:'Big KRIT',
    duration: 341},
    {url:'https://uproxx.com/wp-content/uploads/2022/03/buddy-superghetto.jpeg?resize=768,768',
    title:'Superghetto',
    author:'Buddy',
    duration: 327},
    {url:'https://uproxx.com/wp-content/uploads/2022/01/cordae-from-a-birds-eye-view.jpg?resize=768,768',
    title:'From A Bird’s Eye View',
    author:'Cordae',
    duration: 239},
    {url:'https://uproxx.com/wp-content/uploads/2022/03/denzel-curry-melt-my-eyez-see-your-future.jpeg?resize=768,768',
    title: 'Melt My Eyez See Your Future',
    author: "Denzel Curry",
    duration: 345}
 ]

 const rb = [
    {url:'https://uproxx.com/wp-content/uploads/2022/06/alex-isley-jack-dine-marigold.jpeg?resize=768,768',
    title:'Marigold',
    author:'Alex Isley',
    dutation: 235},
    {url:'https://uproxx.com/wp-content/uploads/2022/06/Amber-Mark-three-dimensions-deep.jpg?resize=768,768',
    title:'Three Dimensions Deep',
    author:'Amber Mark',
    dutation:345},
    {url:'https://uproxx.com/wp-content/uploads/2022/06/Blxst-Before-You-Go-.jpg?resize=768,768',
    title:'Before You Go',
    author:'Blxst',
    dutation:231},
    {url:'https://uproxx.com/wp-content/uploads/2022/06/devvon-terrell-boys-dont-cry.jpg?resize=768,768',
    title:'Boys Don’t Cry',
    author:'Devvon Terrell',
    dutation:123},
    {url:'https://uproxx.com/wp-content/uploads/2022/06/ella-mai-heart-on-my-sleeve.jpeg?resize=768,768',
    title:'Heart On My Sleeve',
    author:'Ella Mai',
    dutation:124},
 ]

 const rock = [
  {url:'https://charts-static.billboard.com/img/2022/04/harry-styles-bma-as-it-was-po3-180x180.jpg',
  title:'As It Was',
  author:'Harry Styles',
  duration: 341},
  {url:'https://charts-static.billboard.com/img/2022/04/lizzo-o9x-about-damn-time-f6q-180x180.jpg',
  title:'About Damn Time',
  author:'Lizzo',
  duration: 341},
  {url:'https://charts-static.billboard.com/img/2018/01/jack-harlow-i43-180x180.jpg',
  title:'First Class',
  author:'Jack Harlow',
  duration: 341},
  {url:'https://charts-static.billboard.com/img/1988/03/future-f8b-180x180.jpg',
  title:'Wait For U',
  author:'Future Featuring Drake & Tems',
  duration: 341},
  {url:'https://charts-static.billboard.com/img/2020/07/glass-animals-rtd-heat-waves-o3i-180x180.jpg',
  title:'Heat Waves',
  author:'Glass Animals',
  duration: 341},
 ]

 const china = [
  {url:'https://y.qq.com/music/photo_new/T002R300x300M000001F2tiR0B8GqN_1.jpg?max_age=2592000',
  title:'差一个时辰',
  author:'ycccc',
  duration: 349},
  {url:'https://y.qq.com/music/photo_new/T002R300x300M000003itOEI3nV7uq_1.jpg?max_age=2592000',
  title:'再见莫妮卡',
  author:'晓悠',
  duration: 347},
  {url:'https://y.qq.com/music/photo_new/T002R300x300M000001QgxP73iI1Rp_2.jpg?max_age=2592000',
  title:'星火',
  author:'吉克隽逸',
  duration: 346},
  {url:'https://y.qq.com/music/photo_new/T002R300x300M000001eUNoW3BiylU_2.jpg?max_age=2592000',
  title:'自叹不如',
  author:'恰恰恰恰恰',
  duration: 315},
  {url:'https://y.qq.com/music/photo_new/T002R300x300M000001EHYD724wZUM_2.jpg?max_age=2592000',
  title:'外婆桥',
  author:'旺仔小乔',
  duration: 348},
 ]

 const japan = [
  {url:'https://y.qq.com/music/photo_new/T002R300x300M0000033vmhr2RqtyU_1.jpg?max_age=2592000',
  title:'ブレーメン',
  author:'ヨルシカ (Yorushika)',
  duration: 346},
  {url:'https://y.qq.com/music/photo_new/T002R300x300M000003V5cCq1NDiOb_1.jpg?max_age=2592000',
  title:'逆光 ',
  author:'Ado',
  duration: 315},
  {url:'https://y.qq.com/music/photo_new/T002R300x300M000000p8NEb4VrYqe_1.jpg?max_age=2592000',
  title:'タイムマシン',
  author:'優里',
  duration: 325},
  {url:'https://y.qq.com/music/photo_new/T002R300x300M00000417bcn2IrFaD_1.jpg?max_age=2592000',
  title:'M八七',
  author:'米津玄師',
  duration: 345},
  {url:'https://y.qq.com/music/photo_new/T002R300x300M0000043lnEe16wSi5_1.jpg?max_age=2592000',
  title:'シャル・ウィ・ダンス？',
  author:'ReoNa',
  duration: 325},
 ]