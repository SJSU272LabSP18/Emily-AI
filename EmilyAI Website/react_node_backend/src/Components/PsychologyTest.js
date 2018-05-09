import React, { Component } from 'react';
import axios from 'axios';
import Index from './Index';
import Header from './Header';
import Footer from './Footer';
import swal from 'sweetalert';
import '../assets/css/style.css'
import ProfileImage from './ProfileImage';
import { envURL, reactURL } from '../config/environment';

class PsychologyTest extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            // FirstName : '',
            // LastName : '',
            // email : '',
            // newEmail : '',
            // CardNumber : '',
            // ExpirationMonth : '',
            // ExpirationYear : '',
            // ZipCode : '' ,
            // error: '',
            // oldPassword: '',
            // newPassword: '',
            // address: '',
            // phone: '',
            // state_name: 'AL',
            // city: '',
            // cardZipCode : ''
            usercomment : ''
        });
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount = () => {

    };

    checkWordCount = () => {
        let s = document.getElementById("comment").value;
        console.log('checking word count');
        s = s.replace(/(^\s*)|(\s*$)/gi,"");
        s = s.replace(/[ ]{2,}/gi," ");
        s = s.replace(/\n /,"\n");
        if (s.split(' ').length <= 100 ) {
            alert("not enough words...");
        }
        else {
            this.handleSubmit();
        }
    };

    handleSubmit = (e) => {
        // e.preventDefault();
       alert("Form Submitted");
       let url = envURL + 'usertestdata';
       let answer = {
           comment : this.state.usercomment
       };
       console.log(answer);
       axios.post( url, answer, { withCredentials : true } )
           .then( response => {
                console.log( response.data );
           })
    };

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        }, () => {
            console.log(this.state);
        })
    };

    render() {
        return (
            <div className='psychologytest'>
                <Header/>
                <br/>
                <div className='container'>
                    <br/>
                    <br/>
                    <h2 className='heading text-center'>
                        PERSONALITY TEST FOR ANALYSIS
                    </h2>
                    <br/>
                    <br/>
                    <br/>
                    <form >
                        <div class="card question-wrapper set1 border" data-question="1">
                            <div class="statement">
                                <h5 className='text-center'>
                                    <b>
                                        Question 1 : You find it difficult to introduce yourself to other people.
                                    </b>
                                </h5>
                            </div>
                            <br/>
                            <div class="row decision text-center col-lg-6">
                                <div class="hidden-xs col-sm-3 caption left sets-answer" data-value="-3">Agree</div>
                                <div class="col-xs-10 col-sm-6 options btn-group" data-toggle="buttons" role="group" aria-label="Options" onChange={this.handleChange}>
                                    <label className='radiotest radio' data-value="-3">
                                        <input type="radio" name="options" autocomplete="off" required/>
                                    </label>
                                    <label className='radiotest' data-value="-2">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="-1">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="0">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="1">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="2">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="3">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                </div>
                                <div class="hidden-xs col-sm-3 caption right sets-answer" data-value="3">Disagree</div>
                            </div>
                            <div class="row decision mobile visible-xs">
                                <div class="col-xs-6 caption left">Agree</div>
                                <div class="col-xs-6 caption right">Disagree</div>
                            </div>
                        </div>
                        <div class="card question-wrapper set1 border" data-question="2">
                            <div class="statement">
                                <h5 className='text-center'>
                                    <b>
                                        Question 2 : You often get so lost in thoughts that you ignore or forget your surroundings.
                                    </b>
                                </h5>
                            </div>
                            <br/>
                            <div class="row decision text-center col-lg-6">
                                <div class="hidden-xs col-sm-3 caption left sets-answer" data-value="-3">Agree</div>
                                <div class="col-xs-10 col-sm-6 options btn-group" data-toggle="buttons" role="group" aria-label="Options">
                                    <label className='radiotest radio' data-value="-3">
                                        <input type="radio" name="options" autocomplete="off" required/>
                                    </label>
                                    <label className='radiotest' data-value="-2">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="-1">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="0">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="1">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="2">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="3">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                </div>
                                <div class="hidden-xs col-sm-3 caption right sets-answer" data-value="3">Disagree</div>
                            </div>
                            <div class="row decision mobile visible-xs">
                                <div class="col-xs-6 caption left">Agree</div>
                                <div class="col-xs-6 caption right">Disagree</div>
                            </div>
                        </div>
                        <div class="card question-wrapper set1 border" data-question="1">
                            <div class="statement">
                                <h5 className='text-center'>
                                    <b>
                                        Question 3 : You find it easy to stay relaxed even when there is some pressure.
                                    </b>
                                </h5>
                            </div>
                            <br/>
                            <div class="row decision text-center col-lg-6">
                                <div class="hidden-xs col-sm-3 caption left sets-answer" data-value="-3">Agree</div>
                                <div class="col-xs-10 col-sm-6 options btn-group" data-toggle="buttons" role="group" aria-label="Options">
                                    <label className='radiotest radio' data-value="-3">
                                        <input type="radio" name="options" autocomplete="off" required />
                                    </label>
                                    <label className='radiotest' data-value="-2">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="-1">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="0">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="1">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="2">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="3">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                </div>
                                <div class="hidden-xs col-sm-3 caption right sets-answer" data-value="3">Disagree</div>
                            </div>
                            <div class="row decision mobile visible-xs">
                                <div class="col-xs-6 caption left">Agree</div>
                                <div class="col-xs-6 caption right">Disagree</div>
                            </div>
                        </div>
                        <div class="card question-wrapper set1 border" data-question="1">
                            <div class="statement">
                                <h5 className='text-center'>
                                    <b>
                                        Question 4 : You do not usually initiate conversations..
                                    </b>
                                </h5>
                            </div>
                            <br/>
                            <div class="row decision text-center col-lg-6">
                                <div class="hidden-xs col-sm-3 caption left sets-answer" data-value="-3">Agree</div>
                                <div class="col-xs-10 col-sm-6 options btn-group" data-toggle="buttons" role="group" aria-label="Options">
                                    <label className='radiotest radio' data-value="-3">
                                        <input type="radio" name="options" autocomplete="off" required/>
                                    </label>
                                    <label className='radiotest' data-value="-2">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="-1">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="0">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="1">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="2">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="3">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                </div>
                                <div class="hidden-xs col-sm-3 caption right sets-answer" data-value="3">Disagree</div>
                            </div>
                            <div class="row decision mobile visible-xs">
                                <div class="col-xs-6 caption left">Agree</div>
                                <div class="col-xs-6 caption right">Disagree</div>
                            </div>
                        </div>
                        <div class="card question-wrapper set1 border" data-question="1">
                            <div class="statement">
                                <h5 className= ' text-center'>
                                    <b>
                                        Question 5 : You are usually highly motivated and energetic.
                                    </b>
                                </h5>
                            </div>
                            <br/>
                            <div class="row decision text-center col-lg-6">
                                <div class="hidden-xs col-sm-3 caption left sets-answer" data-value="-3">Agree</div>
                                <div class="col-xs-10 col-sm-6 options btn-group" data-toggle="buttons" role="group" aria-label="Options">
                                    <label className='radiotest radio' data-value="-3">
                                        <input type="radio" name="options" autocomplete="off" required/>
                                    </label>
                                    <label className='radiotest' data-value="-2">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="-1">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="0">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="1">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="2">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                    <label className='radiotest' data-value="3">
                                        <input type="radio" name="options" autocomplete="off"/>
                                    </label>
                                </div>
                                <div class="hidden-xs col-sm-3 caption right sets-answer" data-value="3">Disagree</div>
                            </div>
                            <div class="row decision mobile visible-xs">
                                <div class="col-xs-6 caption left">Agree</div>
                                <div class="col-xs-6 caption right">Disagree</div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <label> Provide Comments about yourself to know more about your personality (not less than 100 words) </label>
                        <textarea className="form-control" rows="5" id="comment" name='usercomment' onChange={this.handleChange} required />
                        <br/>
                        <br/>
                        <button className='text-center' onClick={this.checkWordCount}>
                            Submit
                        </button>
                    </form>

                </div>
                <br/><br/>


                <br/><br/>
                Hello
                <Footer/>
            </div>
        )
    }
}

export default PsychologyTest;
