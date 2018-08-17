import { AppRegistry } from 'react-native';
//import App from './App';
import DemoNavigator from './src/component/DemoNavigator'
import Test from './src/component/Test'
import Router from './src/component/Router'
import Login from './src/SQLite/Login'
import Tong from './src/component/PostGetData/Tong'
import Acc from './src/component/PostGetData2/Account'
import Ani from './src/component/animations/Ani'
import DemoGesture from './src/component/animations/DemoGesture'
import DemoFlatList from './src/component/DemoListView'
import Test1 from './src/react-redux/test1'
import indexAuth from './src/auth/indexAuth'
import AppFirebase from './src/fireBase/components/App'
import Realtime from './src/fireBase/realtime/App'
import ShowData from './src/fireBase/realtime/App2'
import Fetch from './src/fetch/index'
import ReduxApi from './src/redux-api/App'

AppRegistry.registerComponent('LearnReact', () => ReduxApi);
