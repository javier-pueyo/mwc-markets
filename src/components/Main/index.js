import React from "react";

function Main() {
  return (
    <div id="page-top">
      <div id="wrapper">
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="index.html"
          >
            <div className="sidebar-brand-text mx-3">
            MWC Markets
            </div>
          </a>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
            <a className="nav-link" href="index.html">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>
        </ul>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i className="fa fa-bars"></i>
              </button>

              <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow d-sm-none">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-search fa-fw"></i>
                  </a>

                  <div
                    className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown"
                  >
                    <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-light border-0 small"
                          placeholder="Search for..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                <li className="nav-item dropdown no-arrow mx-1">

                  <div
                    className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="alertsDropdown"
                  >
                    <h6 className="dropdown-header">Alerts Center</h6>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="mr-3">
                        <div className="icon-circle bg-primary">
                          <i className="fas fa-file-alt text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">December 12, 2019</div>
                        <span className="font-weight-bold">
                          A new monthly report is ready to download!
                        </span>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="mr-3">
                        <div className="icon-circle bg-success">
                          <i className="fas fa-donate text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">December 7, 2019</div>
                        $290.29 has been deposited into your account!
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="mr-3">
                        <div className="icon-circle bg-warning">
                          <i className="fas fa-exclamation-triangle text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">December 2, 2019</div>
                        Spending Alert: We've noticed unusually high spending
                        for your account.
                      </div>
                    </a>
                    <a
                      className="dropdown-item text-center small text-gray-500"
                      href="#"
                    >
                      Show All Alerts
                    </a>
                  </div>
                </li>

                <li className="nav-item dropdown no-arrow mx-1">

                  <div
                    className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="messagesDropdown"
                  >
                    <h6 className="dropdown-header">Message Center</h6>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="img/undraw_profile_1.svg"
                          alt="..."
                        />
                        <div className="status-indicator bg-success"></div>
                      </div>
                      <div className="font-weight-bold">
                        <div className="text-truncate">
                          Hi there! I am wondering if you can help me with a
                          problem I've been having.
                        </div>
                        <div className="small text-gray-500">
                          Emily Fowler · 58m
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="img/undraw_profile_2.svg"
                          alt="..."
                        />
                        <div className="status-indicator"></div>
                      </div>
                      <div>
                        <div className="text-truncate">
                          I have the photos that you ordered last month, how
                          would you like them sent to you?
                        </div>
                        <div className="small text-gray-500">Jae Chun · 1d</div>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="img/undraw_profile_3.svg"
                          alt="..."
                        />
                        <div className="status-indicator bg-warning"></div>
                      </div>
                      <div>
                        <div className="text-truncate">
                          Last month's report looks great, I am very happy with
                          the progress so far, keep up the good work!
                        </div>
                        <div className="small text-gray-500">
                          Morgan Alvarez · 2d
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                          alt="..."
                        />
                        <div className="status-indicator bg-success"></div>
                      </div>
                      <div>
                        <div className="text-truncate">
                          Am I a good boy? The reason I ask is because someone
                          told me that people say this to all dogs, even if they
                          aren't good...
                        </div>
                        <div className="small text-gray-500">
                          Chicken the Dog · 2w
                        </div>
                      </div>
                    </a>
                    <a
                      className="dropdown-item text-center small text-gray-500"
                      href="#"
                    >
                      Read More Messages
                    </a>
                  </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Paco Montero
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src="./assets/img/undraw_profile_2.svg"
                    />
                  </a>

                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                      Activity Log
                    </a>
                    <div className="dropdown-divider"></div>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#logoutModal"
                    >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>

            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              </div>

              <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Earnings (Monthly)
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            $40,000
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Earnings (Annual)
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            $215,000
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Tasks
                          </div>
                          <div className="row no-gutters align-items-center">
                            <div className="col-auto">
                              <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                50%
                              </div>
                            </div>
                            <div className="col">
                              <div className="progress progress-sm mr-2">
                                <div
                                  className="progress-bar bg-info"
                                  role="progressbar"
                                  
                                  aria-valuenow="50"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Pending Requests
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            18
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-8 col-lg-7">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Earnings Overview
                      </h6>
                      <div className="dropdown no-arrow">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                        </a>
                      </div>
                    </div>

                    <div className="card-body">
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-5">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Revenue Sources
                      </h6>
                    </div>

                    <div className="card-body">
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Projects
                      </h6>
                    </div>
                    <div className="card-body">
                      <h4 className="small font-weight-bold">
                        Server Migration <span className="float-right">20%</span>
                      </h4>
                      <div className="progress mb-4">
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{width: "20%"}}
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h4 className="small font-weight-bold">
                        Sales Tracking <span className="float-right">40%</span>
                      </h4>
                      <div className="progress mb-4">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{width: "40%"}}
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Development Approach
                      </h6>
                    </div>
                    <div className="card-body">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2021</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Main;
