import React from 'react'
import Wizard from "./Wizard"
import Styles from './Styles'
import { Field } from 'react-final-form'
import NavSideBar from '../components/NavSideBar'
import YearPicker from "react-year-picker";
import Image from '../assets/img/man.png'


// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const onSubmit = async (values) => {
//     await sleep(300);
//     window.alert(JSON.stringify(values, 0, 2));
// };

const Error = ({ name }) => (
    <Field
        name={name}
        subscribe={{ touched: true, error: true }}
        render={({ meta: { touched, error } }) =>
            touched && error ? <span>{error}</span> : null
        }
    />
);


const required = (value) => (value ? undefined : "Required");

function Register() {
    return (
        <div>
            <NavSideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h3 className="h3 text-success">Register</h3>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button type="button" className="btn btn-sm btn-outline-success px-4">Edit</button>
                    </div>
                        <button type="button" className="btn btn-sm btn-outline-success px-4">
                                <span data-feather="calendar"></span>
                                Save
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="container">
                        <Styles>
                            <Wizard>
                                <Wizard.Page>
                                <div className="card shadow-sm mb-4">
                                    <img className="img pt-5 mb-3" width="25%" src={Image} alt="" />
                                    <div className="card-body">
                                    <p className="card-text">SRF Player Name</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                            {/* <button type="button" className="btn btn-sm btn-outline-success">Archive</button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <h4 className="section-header text-success">School Details</h4>
                                    <div>
                                        <Field
                                            name="schoolName"
                                            component="input"
                                            type="text"
                                            placeholder="School Name"
                                            validate={required}
                                        />{' '}
                                        <Error name="schoolName" />
                                    </div>
                                    <label>Select one</label>
                                    <div className="mb-3">
                                        <div custom-control custom-checkbox custom-control-inline>
                                            <Field
                                                name="academicLevel"
                                                component="input"
                                                type="checkbox"
                                                value="class"
                                                className="custom-control-input"
                                                id="class"
                                            />{' '}
                                            <label className="custom-control-label" htmlFor="class">
                                                Class
                                            </label>
                                                <Error name="class" />
                                        </div>
                                        <div custom-control custom-checkbox custom-control-inline>
                                            <Field
                                                name="academicLevel"
                                                component="input"
                                                type="checkbox"
                                                value="grade"
                                                className="custom-control-input"
                                                id="grade"
                                            />{' '}
                                            <label className="custom-control-label" htmlFor="grade">
                                                Grade
                                            </label>
                                                <Error name="grade" />
                                        </div>
                                        <div custom-control custom-checkbox custom-control-inline>
                                            <Field
                                                name="academicLevel"
                                                component="input"
                                                type="checkbox"
                                                value="form"
                                                className="custom-control-input"
                                                id="form"
                                            />
                                            <label className="custom-control-label" htmlFor="form">
                                                Form
                                            </label>
                                                <Error name="form" />
                                        </div>
                                    </div>
                                    <label>Marital status of the caregiver</label>
                                        <div>
                                            <Field name="marital-status" component="select">
                                                <option />
                                                <option value="single">1</option>
                                                <option value="married">2</option>
                                                <option value="divorced">Divo</option>
                                                <option value="separated">Separated</option>
                                                <option value="widowed">Widowed</option>
                                            </Field>
                                            <Error name="marital-status" />
                                        </div>
                                    
                                <hr />
                                    <h4 className="section-header text-success">Household Demography</h4>
                                    <label>Relationship of the care giver to the beneficiary</label>
                                    <div>
                                        
                                        <Field name="relationship" component="select">
                                            <option />
                                            <option value="father">Father</option>
                                            <option value="mother">Mother</option>
                                            <option value="guardian">Guardian</option>
                                        </Field>
                                        <Error name="relationship" />
                                    </div>
                                    <label>Marital status of the caregiver</label>
                                    <div>
                                        <Field name="marital-status" component="select">
                                            <option />
                                            <option value="single">Single</option>
                                            <option value="married">Married</option>
                                            <option value="divorced">Divorced</option>
                                            <option value="separated">Separated</option>
                                            <option value="widowed">Widowed</option>
                                        </Field>
                                        <Error name="marital-status" />
                                    </div>
                                    <label>Deceased relationship to the family</label>
                                    <div>
                                        <Field name="deceased-relationship" component="select">
                                            <option />
                                            <option value="father">Father</option>
                                            <option value="mother">Mother</option>
                                            <option value="guardian">Guardian</option>
                                        </Field>
                                        <Error name="deceased-relationship" />
                                    </div>
                                    <label>Year of Death</label>
                                    <div>
                                        <Field
                                            name="yearOfDeath"
                                            component={YearPicker}
                                            validate={required}
                                        />
                                        <Error name="yearOfDeath" />
                                    </div>
                                    <div>
                                        <Field name="cuase-of-death" component="textarea" placeholder="Main cause of Death" />
                                    </div>
                                    <label>Documentation of Death</label>
                                    <div>
                                        <Field name="marital-status" component="select">
                                            <option />
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </Field>
                                        <Error name="marital-status" />
                                    </div>
                                    <div>
                                        <Field name="explain-no-docs" component="textarea" placeholder="If NO, explain why..." />
                                    </div>
                                    <label>Other Marital Status</label>
                                    <div>
                                    <Field name="other-marital-status" component="select">
                                        <option />
                                        <option value="separation">Separation</option>
                                        <option value="divorce">Divorce</option>
                                    </Field>
                                    <Error name="other-marital-status" />
                                    </div>
                                    <div>
                                        <Field name="other-marital-status-year" component="textarea" placeholder="Years of separation" />
                                    </div>
                                    <div>
                                        <Field name="other-marital-status-cause" component="textarea" placeholder="Cause of separation" />
                                    </div>
                                    <div>
                                        <Field name="household-description" component="textarea" placeholder="Household Description" />
                                    </div>
                                    <hr />
                                    <h4 className="section-header text-success">Household and Commmunity Relations</h4>
                                    <div>
                                        <Field
                                            name="countyOfResidence"
                                            component="input"
                                            type="text"
                                            placeholder="County of Residence"
                                            validate={required}
                                        />
                                        <Error name="countyOfResidence" />
                                    </div>
                                    <div>
                                    <Field
                                        name="areaOfResidence"
                                        component="input"
                                        type="text"
                                        placeholder="Area of Residence"
                                        validate={required}
                                    />
                                    <Error name="areaOfResidence" />
                                    </div>
                                    <div>
                                    <Field
                                        name="numberOfYears"
                                        component="input"
                                        type="int"
                                        placeholder="Number of years living at current residence"
                                        validate={required}
                                    />
                                    <Error name="numberOfYears" />
                                    </div>
                                    <label>Condition</label>
                                    <div>
                                        <Field name="type-of-home" component="select">
                                            <option />
                                            <option value="temporary">Temporary</option>
                                            <option value="semi-permanent">Semi-Permanent</option>
                                            <option value="permanent">Permanent</option>
                                        </Field>
                                        <Error name="type-of-home" />
                                    </div>
                                    <label>No. of rooms</label>
                                    <div>
                                        
                                        <Field name="number-of-rooms" component="select">
                                            <option />
                                            <option value="single">Single Room</option>
                                            <option value="double">Double</option>
                                            <option value="one-bedroom-plus">One Bedroom and above</option>
                                        </Field>
                                        <Error name="number-of-rooms" />
                                    </div>
                                    <label>Does this family posses the following services or assets? (Tick those that apply)</label>
                                    <div className="mb-3 custom-control custom-radio custom-control-inline">
                                        <Field name="number-of-rooms" component="select">
                                            <option />
                                            <option value="single">Single Room</option>
                                            <option value="double">Double</option>
                                            <option value="one-bedroom-plus">One Bedroom and above</option>
                                        </Field>
                                        <Error name="number-of-rooms" />
                                    </div>
                                    <label>No. of rooms</label>
                                    <div>
                                        <Field name="number-of-rooms" component="select">
                                            <option />
                                            <option value="single">Single Room</option>
                                            <option value="double">Double</option>
                                            <option value="one-bedroom-plus">One Bedroom and above</option>
                                        </Field>
                                        <Error name="number-of-rooms" />
                                    </div>
                                    <hr />
                                    <h5>SRF Details</h5>
                                    <div>
                                    <label>Clinic</label>
                                    <Field name="clinic" component="select">
                                        <option />
                                        <option value="father">Father</option>
                                        <option value="mother">Mother</option>
                                        <option value="guardian">Guardian</option>
                                        <option value="guardian">Guardian</option>
                                        <option value="father">Father</option>
                                        <option value="mother">Mother</option>
                                        <option value="guardian">Guardian</option>
                                    </Field>
                                    <Error name="clinic" />
                                    </div>
                                    <div>
                                    <label>Team</label>
                                    <Field name="team" component="select">
                                        <option />
                                        <option value="father">Father</option>
                                        <option value="mother">Mother</option>
                                        <option value="guardian">Guardian</option>
                                        <option value="mother">Mother</option>
                                        <option value="guardian">Guardian</option>
                                    </Field>
                                    <Error name="team" />
                                    </div>
                                </Wizard.Page>
                            </Wizard>
                        </Styles>
                    </div>
                </div>
                </div>
            </main>
        </div>
    )
}

export default Register