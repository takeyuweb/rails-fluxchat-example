// AltContainer で require('react/addons') されているのでその帳尻あわせ･･･
// react-rails の addons = true ではうまくいかなかったので vendor/bower_components 内のものを参照
// 多分僕の無知によるもの
var React = require('react/react-with-addons');
var Messages = require('./components/Messages.jsx');

React.render(
    <Messages />,
    document.getElementById('ReactApp')
);