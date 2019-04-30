import React, {Component} from 'react'

class CategoryNew extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        var headers = {
            'Content-Type': 'application/json',
            'access_token': '49ec71eee48d7399f1c692a19c4092447fff9a799597f79189743521d1d290e31ffb135499e287cc503a0cff51467d54069f773f595323cbc6d24e3e22da607e' 
        }
        fetch('/category_create', {
            method: 'POST',
            body: data,
            headers: headers
        }).then(res => res.json())
        .then((result)=>{
            console.log(result);
            // this.props.history.push('/category/'+ result.user.id)
        });
    }
    render() {
        return (
            <main className="main-content bgc-grey-100">
                <div id="mainContent">
                    <div className="container-fluid">
                        {/* <form onSubmit={this.handleSubmit} >
                            <label htmlFor="user">User </label>
                                <input type="text" id="user_id" name="user_id" placeholder="Your name..." />
                            <label htmlFor="title">title</label>
                                <input type="text" id="title" name="title" placeholder="Your email..." />
                            <label htmlFor="description">Description</label>
                                <input type="text" id="description" name="description" placeholder="Your email..." />
                            <label htmlFor="cream_level">cream_level</label>
                            <select id="cream_level" name="cream_level">
                                <option selected>No item selected</option>
                                <option value="Full">Full</option>
                                <option value="Parchrised">Parchrised</option>
                            </select>
                            <select id="status" name="status">
                                <option selected>No item selected</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                            <input type="submit" defaultValue="Submit" />
                        </form> */}
                        <div className="row">
                            <div className="offset-md-2 masonry-item col-md-8">
                                <div className="bgc-white p-20 bd">
                                    <h6 className="c-grey-900">Validation</h6>
                                    <div className="mT-30">
                                        <form onSubmit={this.handleSubmit} className="container" id="needs-validation" noValidate>
                                            <div className="row">
                                                <div className="col-md-8 mb-3 offset-md-2">
                                                    <label htmlFor="user_id">User</label>
                                                    <input type="text" className="form-control" name="user_id" id="validationCustom01" placeholder="User Id..." required />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8 mb-3 offset-md-2">
                                                    <label htmlFor="title">Title</label>
                                                    <input type="text" className="form-control" name="title" id="validationCustom01" placeholder="Title..." required />
                                                </div>
                                                <div className="col-md-8 mb-3 offset-md-2">
                                                    <label htmlFor="description">Description</label>
                                                    <input type="textarea" className="form-control" name="description" id="validationCustom02" placeholder="Description..." required />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 mb-3 offset-md-2">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="cream_level">Cream Level</label>
                                                        <select id="inputState" name="cream_level" className="form-control">
                                                            <option defaultValue>No item selected</option>
                                                            <option value="Full"> Full </option>
                                                            <option value="Parchrised"> Parchrised </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3 offset-md-1">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="status">Status</label>
                                                        <select id="inputState" name="status" className="form-control">
                                                            <option defaultValue>No item selected</option>
                                                            <option value="Active">Active</option>
                                                            <option value="Inactive">Inactive</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary" type="submit">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default CategoryNew
