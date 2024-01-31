// ErrorBoundary.jsx
import React, { Component } from 'react';
import SEO from '../utils/SEO';
import { NavLink } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render your custom error page here
      return (
        <div className="h-screen w-screen overscroll-none flex flex-col items-center justify-center bg-cosmiclatte text-gunmetal">
            <SEO
        title="404 - Black Gourd"
        description="404 page. There was an error locating the specified page."
        name="Black Gourd"
        type="page"
      />
          <div className='py-10 text-center'>
          <h1 className='text-4xl lg:text-6xl font-vollkorn font-black py-1'>Well, well, well ...</h1>
          <h1 className='text-3xl lg:text-5xl font-vollkorn font-black py-1'>who do we have here?</h1>
          </div>
          <div className='text-lg lg:text-xl font-sourcecode text-center lg:px-8 px-4'>
          <p className='py-2'>Looks like the page or path you are looking for was not found on this website.</p>
          <p className='py-2'>Don&apos;t worry, it&apos;s probably something we did.</p>
          <p className='group main-decor py-2'>
            While we figure it out, you can head back to the <span className='animate-decor'><NavLink to="/" reloadDocument>Home page</NavLink></span>.
          </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
