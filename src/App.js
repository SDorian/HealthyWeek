import React, { Component } from 'react';
import logo from './logo.svg';
import tomatoes from './img/health.jpg';
import hourglass from './img/time.jpg';
import money from './img/money.jpg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <div className="main">
            <div>
                <div>
                    <h1 className="main_header">Healthy Week</h1>

                    <h2>Start planning your weeks menus in a healthy manner</h2>
                    <ul>
                        <li>Make your menus over a week</li>
                        <li>Choose beetwen several meals provided by Healthy Week</li>
                        <li>Add your own meals and recipes</li>
                        <li>Create and export your groceries list from your week menu</li>
                    </ul>
                </div>

                <button type="button">START !</button>
                
            </div>
        </div>

         <div className="presentation_block health">
            <div className="text_wrapper">
                <div className="text_box">
                    <div>
                        <h2>Eat healthier </h2>
                        <p>
                            Planning your dishes gives you a global 
                            vision of what you eat, and provides you the
                            opportunity to control and regulate your alimentation.
                        </p>
                    </div>
                </div>
            </div>

            <div className="img_box right_box">
                <img src={tomatoes} alt="Tomates" />
            </div>
          </div> 
       
          <div className="presentation_block time"> 
            <div className="img_box left_box">
                <img src={hourglass} alt="Hourglass"/>
            </div>

            <div className="text_wrapper">
                <div className="text_box">
                    <div>
                        <h2>Win time</h2>
                        <p>
                            No more wondering for hours what you will 
                            have for lunch or diner and ending up eating
                            out or ordering takeaway, because you can't
                            or don't want to decide.
                        </p>
                    </div>
                </div>
            </div>
          </div>

          <div className="presentation_block money">
            <div className="text_wrapper">
                <div className="text_box">
                    <div>
                        <h2>Save money</h2>
                        <p>
                            When you plan your meals, you know what 
                            to buy and then you don't spend money
                            buying stuff you don't need.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="img_box right_box">
                <img src={money} alt="Bank bill" />
            </div>
          </div>

      </div>
    );
  }
}

export default App;
