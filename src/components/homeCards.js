import React from 'react';
import  '../styles/home.css'
import {Container,Row, Col, Figure} from 'react-bootstrap'
// import CategoryImgs from './CategoryImgs'
import BtnComp from './btnComp';
function HomeCards({categories}) {
    console.log(categories)
    return (
        <Container  >
        {            
             (categories)?  categories.map((cat,index) =>{
                return (index % 2)? (
                    (cat.imageUrl)? (<Row className={"shadow-sm "}>
                        <Col >
                            <Figure className="valign marginlow" >
                                <Figure.Image
                                width={350}
                                height={100}                               
                                src={cat.imageUrl}
                                />
                            </Figure>
                        </Col>
                        <Col  className="d-flex align-items-center justify-content-center">
                        <div className="flexcol">
                            <h3 className="d-flex align-items-center justify-content-center catHead" >{cat.name}</h3>
                            <div className="d-flex align-items-center justify-content-center">
                                {cat.description}
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                            <BtnComp type='button' >
                                Explore {cat.name}
                            </BtnComp>
                            </div>
                        </div>
                        </Col>
                    </Row>) : ''):((cat.imageUrl)?
                        <Row className={"shadow-sm "}>
                        <Col  className="d-flex align-items-center justify-content-center"><div  ><h3 className="d-flex align-items-center justify-content-center catHead" >{cat.name}</h3>
                            <div className="d-flex align-items-center justify-content-center">
                                {cat.description}
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                            <BtnComp type='button' >
                                Explore {cat.name}
                            </BtnComp>
                            </div>
                        </div>
                        </Col>
                        <Col >
                            <Figure className="valign marginlow" >
                                <Figure.Image
                                width={350}
                                height={100}
                                
                                
                                src={cat.imageUrl}
                                />
                            </Figure>
                        </Col>
                    </Row>:''
                    )
            }):''
        }

        </Container>
        
)
}
export default HomeCards;