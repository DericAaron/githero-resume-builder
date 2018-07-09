import React, { Component } from 'react';

class Project extends Component {
  constructor(props){
    super(props);

    this.state = {view: 1}
  }

  stateShift = (newState) => {
    this.setState({view: newState});
  } //end state shift

  render() {

    let content = null;
    switch (this.state.view) {
      case 1: content = (
        <div>
          <img src="https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_hero/public/image/2017/07/main/slow-cooker_pork_tacos_with_fresh_tomato_salsa_2487601_summe_0064.jpg?itok=Xdg39X7i" alt=""/>

          <div className="description">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et obcaecati vel pariatur cupiditate quia ratione porro deleniti, unde sunt quae aspernatur temporibus voluptate laudantium dolorem expedita consequatur ea? Corporis, debitis?</p>
          </div>
        </div>
        ); break;

      case 2:
        content = (
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa impedit repellendus repellat pariatur architecto dolor obcaecati nisi assumenda atque dolore! Fugit, iure! Repudiandae molestiae quas eligendi natus odio perferendis est?</p>
          </div>
        );
        break;

      default:
        break;
    }
    return (
        <div className="card">
          <div className="card-header">
            <h5>Project Name</h5>
            <br/>

            <div>
              <button onClick={() => this.stateShift(1)}>Layout</button>
              <button onClick={() => this.stateShift(2)}>Source</button>
              <a href="https://github.com/DericAaron/movie-collection-database" target="_blank">
              <button>Git</button>
              </a>
            </div>
            
          </div>
          {content}
         
        </div> 

    );
  }
}

export default Project;