import { createGlobalStyle, css } from 'styled-components'

export const theme = {
  white: '#ffffff',
  dark: '#333333',
  purple: '#6e27c5' // purple heart
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto|Bungee+Inline');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding:0;
    font-family: 'Roboto', georgia, serif;
    word-wrap: break-word;
    background-color: #fafafa;
  }

  h1, h2, h3 {
    font-family: 'Open Sans';
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;  
  }

  /* remove dotted line around links in Firefox */
  a:active, a:focus {
    outline: 0;
    border: none;
    -moz-outline-style: none
  }

  :focus {
    outline:none;
  }

  ::-moz-focus-inner {
    border:0;
  }
`

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)
