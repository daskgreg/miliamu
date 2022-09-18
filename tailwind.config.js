/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./**/*.html"],
  theme: {
    screens:{
      sm: '480px',
      md:'768px',
      lg:'1200px',
      xl:'1440px'
    },
    extend: {
      fontFamily:{
        boldenVan:'bolden',
      },
      colors:{
        cPurple: '#A85ED4',
        cGreen: '#3CCD9E',
        cDarkGreen: '#2E4034',
        cBiege: '#FCF8E8',
        cPink: '#EE6983',
        cGray: '#303030'
      }
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
    addComponents({
      '.letsTalkXL': {
        width:'260px',
        height:'82px',
        padding: '1.3rem 1rem',
        borderRadius: '20px',
        fontSize:'31px',
        backgroundColor: '#A85ED4',
        color: '#FCF8E8',
        boxShadow: '4px 5px 0px 0px rgba(252,248,232)',
        textAlign: 'center',
      },
      '.letsTalkLG': {
        width:'200px',
        height:'70px',
        padding: '1.3rem 1rem',
        borderRadius: '20px',
        fontSize:'20px',
        backgroundColor: '#A85ED4',
        color: '#FCF8E8',
        boxShadow: '4px 5px 0px 0px rgba(252,248,232)',
        textAlign: 'center',
      },
      '.letsTalkMD': {
        width:'200px',
        height:'70px',
        padding: '1.3rem 1rem',
        borderRadius: '20px',
        fontSize:'20px',
        backgroundColor: '#A85ED4',
        color: '#FCF8E8',
        boxShadow: '4px 5px 0px 0px rgba(252,248,232)',
        textAlign: 'center',
      },
      '.startProjectXL': {
        width:'260px',
        height:'82px',
        padding: '1.3rem 1rem',
        borderRadius: '20px',
        fontSize:'31px',
        backgroundColor: '#3CCD9E',
        color: '#FCF8E8',
        boxShadow: '4px 5px 0px 0px rgba(252,248,232)',
        textAlign: 'center',
      },
      '.startProjectLG': {
        width:'200px',
        height:'70px',
        padding: '1.3rem 1rem',
        borderRadius: '20px',
        fontSize:'20px',
        backgroundColor: '#3CCD9E',
        color: '#FCF8E8',
        boxShadow: '4px 5px 0px 0px rgba(252,248,232)',
        textAlign: 'center',
      },
      '.startProjectMD': {
        width:'200px',
        height:'70px',
        padding: '1.3rem 1rem',
        borderRadius: '20px',
        fontSize:'20px',
        backgroundColor: '#3CCD9E',
        color: '#FCF8E8',
        boxShadow: '4px 5px 0px 0px rgba(252,248,232)',
        textAlign: 'center',
      },
    })
  })],
}
