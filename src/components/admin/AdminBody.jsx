import React from 'react';

const AdminBody = () => {
  return (
    <>
      <div className='main-card-container'>
        <main className='container-fluid'>
          <div className='card-group'>

            {/* card 1 is here */}
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <h2 class="m-b-0"><i class="mdi mdi-alert-circle"></i></h2>
                    <h3 class="">546</h3>
                    <h6 class="card-subtitle">Total Users</h6></div>
                  <div class="col-12">
                    <div class="progress">
                      <div class="progress-bar bg-success" role="progressbar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* card 2 is here */}
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <h2 class="m-b-0"><i class="mdi mdi-alert-circle"></i></h2>
                    <h3 class="">546</h3>
                    <h6 class="card-subtitle">All User Resources</h6></div>
                  <div class="col-12">
                    <div class="progress">
                      <div class="progress-bar bg-success" role="progressbar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* card 3 is here */}
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <h2 class="m-b-0"><i class="mdi mdi-alert-circle"></i></h2>
                    <h3 class="">546</h3>
                    <h6 class="card-subtitle">$ in rewards</h6></div>
                  <div class="col-12">
                    <div class="progress">
                      <div class="progress-bar bg-success" role="progressbar" ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default AdminBody;
