import React from 'react';
import { Appbar } from 'react-native-paper';

export default class Header extends React.Component {
  _goBack = () => console.log('Went Back.');

  _handleSearch = () => console.log('Searching.');

  _handleMore = () => console.log('Shown more.');

  render() {
    return (
      <Appbar.Header>
        {/* <Appbar.BackAction
          onPress={this._goBack}
        /> */}
        <Appbar.Content
          title="Equivalent Exchange"
        />
        <Appbar.Action icon="magnify" onPress={this._handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
      </Appbar.Header>
    )
  }
}