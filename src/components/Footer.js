import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends Component {
    render() {
        return (
            <MDBFooter className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="4">
                            <h5 className="title">Help &amp; Information </h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">Help</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Track Order</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Delivery &amp; Returns</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="4">
                            <h5 className="title">About</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">About</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Careers</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Corporate Responsability</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="4">
                            <h5 className="title">Others</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">Privacy &amp; Cookies</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Ts&amp;Cs</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Accessibility</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBFooter>
        );
    }
}

export default Footer;