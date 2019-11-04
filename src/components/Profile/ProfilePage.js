import React, { Component } from 'react';
import Pic from './bank_profile.png'

export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                firstName: 'first name',
                lastName: 'last name',
                userName: 'user name',
                pronouns: 'pronoun',
                location: 'location',
                email: 'email'
            }
        }
    }
    render() {
        return (
            <div className="user">
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="container">
                    <div>
                        <div className='img'>
                            <img className="profilePhoto" src={Pic} alt="profilepic"></img>
                        </div>   
                        <br/>
                        <div className="userInfo">
                            <h4 className="info">{this.state.userInfo.firstName}</h4>
                            <br/>
                            <p className="info">{this.state.userInfo.lastName}</p>
                            <br/>
                            <p className="info">{this.state.userInfo.userName}</p>
                            <br/>
                            <p className="info">{this.state.userInfo.pronouns}</p>
                            <br />
                            <p className="info">{this.state.userInfo.location}</p>
                            <br />
                            <p className="info">{this.state.userInfo.email}</p>
                        </div>

                        <div className="left" >
                            <ul className="profileNav">
                                <li>About</li>
                                <li>Gallery</li>
                                <li>Collections</li>
                            </ul>
                            <div className="active"></div>
                            <div className="row">
                                
                                <br />
                                
                            </div>
                            <div className="stats row">
                                <div className="stat col-xs-4" >
                                    <p className="number-stat">3,619</p>
                                    <p className="desc-stat">Followers</p>
                                </div>
                                <div className="stat col-xs-4">
                                    <p className="number-stat">42</p>
                                    <p className="desc-stat">Following</p>
                                </div>
                                <div className="stat col-xs-4" >
                                    <p className="number-stat">38</p>
                                    <p className="desc-stat">Uploads</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}