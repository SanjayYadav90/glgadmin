import React, {Component} from 'react'

class CategoryNew extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('/category_create', {
            method: 'POST',
            body: data,
        }).then(res => res.json())
        .then((result)=>{
            this.props.history.push('/category/'+ result.user.id)
        });
    }
    render() {
        return (
            <main className="main-content bgc-grey-100">
                <div id="mainContent">
                    <div className="container-fluid">
                        {/* <form onSubmit={this.handleSubmit} >
                        <label htmlFor="name">User Name</label>
                        <input type="text" required id="name" name="user[name]" placeholder="Your name..." />
                        <label htmlFor="email">Email</label>
                        <input type="text" required id="email" name="user[email]" placeholder="Your email..." />
                        <label htmlFor="age">Age</label>
                        <select id="age" name="user[age]">
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                        </select>
                        <label htmlFor="mobile">Mobile</label>
                        <input type="text" id="mobile" name="user[mobile]" placeholder="Your mobile no..." />
                        <input type="submit" defaultValue="Submit" />
                        </form> */}
                        <div className="row">
                            <div className="offset-md-2 masonry-item col-md-8">
                                <div className="bgc-white p-20 bd">
                                    <h6 className="c-grey-900">Validation</h6>
                                    <div className="mT-30">
                                        <form className="container" id="needs-validation" noValidate>
                                            <div className="row">
                                                <div className="col-md-8 mb-3 offset-md-2">
                                                    <label htmlFor="validationCustom01">First name</label>
                                                    <input type="text" className="form-control" id="validationCustom01" placeholder="First name" defaultValue="Mark" required />
                                                </div>
                                                <div className="col-md-8 mb-3 offset-md-2">
                                                    <label htmlFor="validationCustom02">Last name</label>
                                                    <input type="textarea" className="form-control" id="validationCustom02" placeholder="Last name" defaultValue="Otto" required />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 mb-3 offset-md-2">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputState">Cream Level</label>
                                                        <select id="inputState" className="form-control">
                                                            <option selected>No item selected</option>
                                                            <option> Full </option>
                                                            <option> Parchrised </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3 offset-md-1">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputState">Status</label>
                                                        <select id="inputState" className="form-control">
                                                            <option selected>No item selected</option>
                                                            <option>Active</option>
                                                            <option>Inactive</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary" type="submit">Submit form</button>
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
