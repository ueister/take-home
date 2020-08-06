import React from 'react';

/*
Header file for the header.
*/

export class Header extends React.Component {
  render() {
    return (
      <header class="global-header" role="banner">
		<h1>Puppy image gallery</h1>

		<blockquote class="header-quote">
			<p>A dog will teach you unconditional love. If you can have that in your life, things won't be too bad.</p>

			<cite>&mdash;Robert Wagner</cite>
		</blockquote>
	</header>
    );
  }
}
