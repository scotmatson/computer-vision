var React = require('react');
var ReactDOM = require('react-dom');

require('../process/sass/style.scss');

class Account extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.uid}</td>
                <td>{this.props.username}</td>
                <td>{this.props.firstname}</td>
                <td>{this.props.lastname}</td>
                <td>{this.props.created}</td>
                <td>{this.props.ip}</td>
            </tr>
        );
    }
}

class Admin extends React.Component {
    render() {
        var userAccounts = this.props.users.map(function (user) {
            return (<Account
                        key={user.uid}
                        uid={user.uid}
                        username={user.username}
                        firstname={user.firstname}
                        lastname={user.created}
                        created={user.created}
                        ip={user.ip}/>);});

        return (
            <table>
                <thead>
                    <tr>
                        <th>uid</th>
                        <th>username</th>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>created</th>
                        <th>ip</th>
                    </tr>
                </thead>
                <tbody>{userAccounts}</tbody> 
            </table>
        );
    }
}
ReactDOM.render(<Admin users={users}></Admin>, document.getElementById('react-admin-container'));

