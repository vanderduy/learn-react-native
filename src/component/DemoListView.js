import React, { Component } from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native'

export default class DemoFlatList extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        var _data = [
            { key: 'duy', tuoi: 21 },
            { key: 'Linh', tuoi: 20 },
            { key: 'Thao', tuoi: 17 },
            { key: 'huong', tuoi: 21 },
            { key: 'Tuyen', tuoi: 19 },
            { key: 'Hong', tuoi: 30 },
            { key: 'Linh', tuoi: 21 },
        ]
        return (
            <View style={{height:100}}>
                <FlatList
                    data={_data}
                    renderItem={({item})=>
                        <View >
                            <Text>{item.key}</Text>
                            <Text>{item.tuoi}</Text>
                        </View>
                    }
                />
            </View>
        );
    }
}