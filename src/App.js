import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <div class="foodMany">
            <h1 class="textMany">FOOD MENU</h1>
          </div>

          <div class="buttons">
            <a href="#" class="btn first">All</a>
            <a href="#" class="btn secound">Pizza</a>
            <a href="#" class="btn">Drinks</a>
            <a href="#" class="btn">Grill</a>
            <a href="#" class="btn">Burger</a>
          </div>
        </section>

        <section>
          <div class="row">
            <div class="column">
              <div class="card">
                  <img onclick="myFunction(1)" class="img" src="http://dieterdesigns.com/wp-content/uploads/2015/03/Food-Photography-by-Dieter-Designs-9-500x500.jpg" alt="Jane" style={{width:"100%"}} />
                <div class="container">
                  <h2>Kapricoza mala</h2>
                  <p>Price: <bold>250</bold> din</p>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src="http://zoebingleypullin.com/wp-content/uploads/sites/4/2017/05/500x500xMung-bean-500x500.jpg.pagespeed.ic.jOSsRJ0PQ5.jpg" alt="Mike" style={{width:"100%"}} />
                <div class="container">
                  <h2>Madjarica mala</h2>
                  <p>Price: <bold>250</bold> din</p>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src="http://zoebingleypullin.com/wp-content/uploads/sites/4/2017/05/500x500xMung-bean-500x500.jpg.pagespeed.ic.jOSsRJ0PQ5.jpg" alt="Mike" style={{width:"100%"}} />
                <div class="container">
                  <h2>Domaca mala</h2>
                  <p>Price: <bold>250</bold> din</p>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src="http://zoebingleypullin.com/wp-content/uploads/sites/4/2017/05/500x500xMung-bean-500x500.jpg.pagespeed.ic.jOSsRJ0PQ5.jpg" alt="Mike" style={{width:"100%"}} />
                <div class="container">
                  <h2>Kapricoza mala</h2>
                  <p>Price: <bold>250</bold> din</p>
                </div>
              </div>
            </div>


            <div class="column">
              <div class="card">
                <img src="http://tasteasianfood.com/wp-content/uploads/2018/04/pad-thai-1-500x500.jpg" alt="John" style={{width:"100%"}} />
                <div class="container">
                  <h2>Kapricoza mala</h2>
                  <p>Price: <bold>250</bold> din</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <div class="card">
                <img class="img" src="http://dieterdesigns.com/wp-content/uploads/2015/03/Food-Photography-by-Dieter-Designs-9-500x500.jpg" alt="Jane" />
                <div class="container">
                  <h2>Kapricoza mala</h2>
                  <p>Price: <bold>250</bold> din</p>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src="http://zoebingleypullin.com/wp-content/uploads/sites/4/2017/05/500x500xMung-bean-500x500.jpg.pagespeed.ic.jOSsRJ0PQ5.jpg" alt="Mike" style={{width:"100%"}} />
                <div class="container">
                  <h2>Madjarica mala</h2>
                  <p>Price: <bold>250</bold> din</p>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src="http://zoebingleypullin.com/wp-content/uploads/sites/4/2017/05/500x500xMung-bean-500x500.jpg.pagespeed.ic.jOSsRJ0PQ5.jpg" alt="Mike" style={{width:"100%"}} />
                <div class="container">
                  <h2>Domaca mala</h2>
                  <p>Price: <bold>250</bold> din</p>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src="http://zoebingleypullin.com/wp-content/uploads/sites/4/2017/05/500x500xMung-bean-500x500.jpg.pagespeed.ic.jOSsRJ0PQ5.jpg" alt="Mike" style={{width:"100%"}} />
                <div class="container">
                  <h2>Kapricoza mala</h2>
                  <p>Price: <bold>250</bold> din</p>
                </div>
              </div>
            </div>


            <div class="column">
              <div class="card">
                <img src="http://tasteasianfood.com/wp-content/uploads/2018/04/pad-thai-1-500x500.jpg" alt="John" style={{width:"100%"}} />
                <div class="container">
                  <h2>Kapricoza mala</h2>
                  <p>Price: <bold>250</bold> din</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
