import React from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

class thisEmployee extends React.Component {
    constructor(props) {
      super(props);
  
  
      this.state = {
        inputLinkClicked: false
      }
    }
  
    handleAddSecondInput() {
      this.setState({
        inputLinkClicked: true
      })
    }
  
  
    render() {
      return(
        <main id="wrapper" className="" data-reset-cookie-tab>
          <div id="content" role="main">
            <div className="inner-block">
  
              <H1Heading title="Tell us about any disabilities, illnesses or ongoing conditions"/>
  
              <InputField label="Name of condition"
                InputType="text"
                InputId="id-condition"
                InputName="condition"
              />
  
              {
                this.state.inputLinkClicked?
  
                <InputField label=""
                  InputType="text"
                  InputId="id-condition2"
                  InputName="condition2"
                />
  
                :
  
                <div></div>
              }
  
              <button
                type="button"
                className="make-button-link"
                data-add-button=""
                href="#"
                onClick={this.handleAddSecondInput}
              >
                Add a condition
              </button>
  
              <FormButton buttonLabel="Next"
                handleSubmit={this.handleSubmit}
                linkto={
                  this.state.illnessOrDisability === 'true' ?
                  "/404"
                  :
                  "/add-your-details"
                }
              />
  
              <BackLink backLink="/add-your-details" />
  
            </div>
           </div>
        </main>
      );
    }
  }

  export module Employee;