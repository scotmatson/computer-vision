var React = require('react');
var ReactDOM = require('react-dom');

require('../stylesheets/main.scss');

class UserAccount extends React.Component {
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

class UserVideo extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.vid}</td>
                <td>{this.props.uid}</td>
                <td>{this.props.filename}</td>
                <td>{this.props.created}</td>
            </tr>
        );
    }
}

class Admin extends React.Component {
    render() {
        var userAccounts = this.props.users.map(function(user) {
            return (<UserAccount
                        key={user.uid}
                        uid={user.uid}
                        username={user.username}
                        firstname={user.firstname}
                        lastname={user.created}
                        created={user.created}
                        ip={user.ip}/>);});

        var userVideos = this.props.videos.map(function(video) {
            return (<UserVideo
                        key={video.vid}
                        vid={video.vid}
                        uid={video.uid}
                        filename={video.filename}
                        created={video.created}/>);});

        return (
            <div>
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

                <table>
                    <thead>
                        <tr>
                            <th>vid</th>
                            <th>uid</th>
                            <th>filename</th>
                            <th>created</th>
                        </tr>
                    </thead>
                    <tbody>{userVideos}</tbody> 
                </table>
            </div>
        );
    }
}
ReactDOM.render(<Admin users={users} videos={videos}></Admin>, document.getElementById('react-admin-container'));

