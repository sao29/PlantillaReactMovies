import React from 'react'
import PageWrapper from './PageWrapper'

const Celebrity = () => {
  return (
    
        <PageWrapper>
   <div>
  <div className="hero common-hero">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="hero-ct">
            <h1>celebrity listing - grid</h1>
            <ul className="breadcumb">
              <li className="active"><a href="#">Home</a></li>
              <li> <span className="ion-ios-arrow-right" /> celebrity listing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* celebrity grid v1 section*/}
  <div className="page-single">
    <div className="container">
      <div className="row ipad-width2">
        <div className="col-md-9 col-sm-12 col-xs-12">
          <div className="topbar-filter">
            <p>Found <span>1,608 celebrities</span> in total</p>
            <label>Sort by:</label>
            <select>
              <option value="popularity">Popularity Descending</option>
              <option value="popularity">Popularity Ascending</option>
              <option value="rating">Rating Descending</option>
              <option value="rating">Rating Ascending</option>
              <option value="date">Release date Descending</option>
              <option value="date">Release date Ascending</option>
            </select>
            <a href="celebritylist.html" className="list"><i className="ion-ios-list-outline " /></a>
            <a href="celebritygrid01.html" className="grid"><i className="ion-grid active" /></a>
          </div>
          <div className="celebrity-items">
            <div className="ceb-item">
              <a href="celebritysingle.html"><img src="images/uploads/ceb1.jpg" alt /></a>
              <div className="ceb-infor">
                <h2><a href="celebritylist.html">Tom Hardy</a></h2>
                <span>actor, usa</span>
              </div>
            </div>
            <div className="ceb-item">
              <a href="celebritylist.html"><img src="images/uploads/ceb2.jpg" alt /></a>						
              <div className="ceb-infor">
                <h2><a href="celebritylist.html">Leonardo DiCaprio</a></h2>
                <span>actor, mexico</span>
              </div>
            </div>
            <div className="ceb-item">
              <a href="celebritysingle.html"><img src="images/uploads/ceb3.jpg" alt /></a>
              <div className="ceb-infor">
                <h2><a href="celebritylist.html">Emma Stone</a></h2>
                <span>Actress, usa</span>
              </div>
            </div>
            <div className="ceb-item">
              <a href="celebritysingle.html"> <img src="images/uploads/ceb4.jpg" alt /></a>
              <div className="ceb-infor">
                <h2><a href="celebritylist.html">Olga Kurylenko</a></h2>
                <span>Actress, sweden</span>
              </div>
            </div>
            <div className="ceb-item">
              <a href="celebritysingle.html"><img src="images/uploads/ceb5.jpg" alt /></a>
              <div className="ceb-infor">
                <h2><a href="celebritylist.html">Micheal Bay</a></h2>
                <span>Director, france</span>
              </div>
            </div>
            <div className="ceb-item">
              <a href="celebritysingle.html"><img src="images/uploads/ceb6.jpg" alt /></a>
              <div className="ceb-infor">
                <h2><a href="celebritylist.html">Martin Scorsese</a></h2>
                <span>Director, italy</span>
              </div>
            </div>
            <div className="ceb-item">
              <a href="celebritysingle.html"><img src="images/uploads/ceb7.jpg" alt /></a>
              <div className="ceb-infor">
                <h2><a href="celebritylist.html">TJohnson Staham</a></h2>
                <span>actor, uk</span>
              </div>
            </div>
            <div className="ceb-item">
              <a href="celebritysingle.html"><img src="images/uploads/ceb8.jpg" alt /></a>
              <div className="ceb-infor">
                <h2><a href="celebritylist.html">Haley Bennett</a></h2>
                <span>actress, france</span>
              </div>
            </div>
            <div className="ceb-item">
              <a href="celebritysingle.html"><img src="images/uploads/ceb9.jpg" alt /></a>
              <div className="ceb-infor">
                <h2><a href="celebritylist.html">Teresa Palmer</a></h2>
                <span>actress, uk</span>
              </div>
            </div>
          </div>
          <div className="topbar-filter">
            <label>Reviews per page:</label>
            <select>
              <option value="range">9 Reviews</option>
              <option value="saab">10 Reviews</option>
            </select>
            <div className="pagination2">
              <span>Page 1 of 6:</span>
              <a className="active" href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">6</a>
              <a href="#"><i className="ion-arrow-right-b" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-xs-12 col-sm-12">
          <div className="sidebar">
            <div className="searh-form">
              <h4 className="sb-title">Search celebrity</h4>
              <form className="form-style-1 celebrity-form" action="#">
                <div className="row">
                  <div className="col-md-12 form-it">
                    <label>Celebrity name</label>
                    <input type="text" placeholder="Enter keywords" />
                  </div>
                  <div className="col-md-12 form-it">
                    <label>Celebrity Letter</label>
                    <select>
                      <option value="range">A</option>
                      <option value="saab">B</option>
                    </select>
                  </div>
                  <div className="col-md-12 form-it">
                    <label>Category</label>
                    <select>
                      <option value="range">Actress</option>
                      <option value="saab">Others</option>
                    </select>
                  </div>
                  <div className="col-md-12 form-it">
                    <label>Year of birth</label>
                    <div className="row">
                      <div className="col-md-6">
                        <select>
                          <option value="range">1970</option>
                          <option value="number">Other</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <select>
                          <option value="range">1990</option>
                          <option value="number">others</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 ">
                    <input className="submit" type="submit" defaultValue="submit" />
                  </div>
                </div>
              </form>
            </div>
            <div className="ads">
              <img src="images/uploads/ads1.png" alt />
            </div>
            <div className="celebrities">
              <h4 className="sb-title">featured celebrity</h4>
              <div className="celeb-item">
                <a href="#"><img src="images/uploads/ava1.jpg" alt /></a>
                <div className="celeb-author">
                  <h6><a href="#">Samuel N. Jack</a></h6>
                  <span>Actor</span>
                </div>
              </div>
              <div className="celeb-item">
                <a href="#"><img src="images/uploads/ava2.jpg" alt /></a>
                <div className="celeb-author">
                  <h6><a href="#">Benjamin Carroll</a></h6>
                  <span>Actor</span>
                </div>
              </div>
              <div className="celeb-item">
                <a href="#"><img src="images/uploads/ava3.jpg" alt /></a>
                <div className="celeb-author">
                  <h6><a href="#">Beverly Griffin</a></h6>
                  <span>Actor</span>
                </div>
              </div>
              <div className="celeb-item">
                <a href="#"><img src="images/uploads/ava4.jpg" alt /></a>
                <div className="celeb-author">
                  <h6><a href="#">Justin Weaver</a></h6>
                  <span>Actor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </PageWrapper>
      

  )
}

export default Celebrity
