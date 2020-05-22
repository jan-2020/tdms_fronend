import React, { Component } from 'react';
//import 'react-table-6/react-table.css';

class AssignPermission extends Component {

  render() {

    return (

      <table className="table table-striped table-bordered" id="assign_table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Permissions</th>
            <th scope="col" className="text-center">Roles</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Delete Trainee</td>
            <td>
              <div>

                <div className="input-group mb-3 float-left" id="roles_checkbox">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <label className="form-control" aria-label="Text input with checkbox">Trainee</label>
                </div>

                <div className="input-group mb-3 float-left ml-4" id="roles_checkbox">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <label className="form-control" aria-label="Text input with checkbox">Trainer</label>
                </div>


                <div className="input-group mb-3 float-right" id="roles_checkbox">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <label className="form-control" aria-label="Text input with checkbox">Manager</label>
                </div>


              </div>

            </td>

          </tr>

          <tr>
            <th scope="row">2</th>
            <td>Add Trainer</td>
            <td>
              <div>

                <div className="input-group mb-3 float-left" id="roles_checkbox">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <label className="form-control" aria-label="Text input with checkbox">Trainee</label>
                </div>

                <div className="input-group mb-3 float-left ml-4" id="roles_checkbox">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <label className="form-control" aria-label="Text input with checkbox">Trainer</label>
                </div>


                <div className="input-group mb-3 float-right" id="roles_checkbox">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <label className="form-control" aria-label="Text input with checkbox">Manager</label>
                </div>


              </div>

            </td>

          </tr>

          <tr>
            <th scope="row">3</th>
            <td>Add Trainee</td>
            <td>
              <div>

                <div className="input-group mb-3 float-left" id="roles_checkbox">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <label className="form-control" aria-label="Text input with checkbox">Trainee</label>
                </div>

                <div className="input-group mb-3 float-left ml-4" id="roles_checkbox">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <label className="form-control" aria-label="Text input with checkbox">Trainer</label>
                </div>


                <div className="input-group mb-3 float-right" id="roles_checkbox">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <label className="form-control" aria-label="Text input with checkbox">Manager</label>
                </div>


              </div>

            </td>

          </tr>

        </tbody>
      </table>
    )
  }


}
export default AssignPermission;
