import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import s from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const searchValue = this.state.value.trim();
    if (!searchValue) {
      Notiflix.Notify.info('Please write some value');
    }
    this.props.onSubmit(searchValue);
    this.setState({ value: '' });
  };
  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.Button}>
            <span className={s.ButtonLabel}>Search</span>
          </button>

          <input
            className={s.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
