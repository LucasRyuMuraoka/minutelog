import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
		:root {
			/* Fonts */
			--text-body: #000000;
			--anchor-color: #422680;

			/* Buttons */
			--btn-primary: #341671;
			--btn-primary-hover: #682CE2;

			--btn-edit-primary: #002DCC;
			--btn-edit-hover: #003CFF;

			--btn-delete-primary: #F90000;
			--btn-delete-hover: #FFFFFF;

			--btn-font-color: #FFFFFF;

			/* Sidebar */
			--sidebar-background: #341671;
			--sidebar-font-color: var(--btn-font-color);

			/* Main */
			--elipse-background: #B03EF5;

			/* Footer */
			--footer-background: #15092D;
		}


    * {
        box-sizing: border-box;

        padding: 0;
        margin: 0;

        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 200ms;    
    }

    // font-size: 16px (Desktop)
    html {
        scroll-behavior: smooth;
        
        @media only screen and (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media only screen and (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        -webkit-font-smoothing: antialiased;

        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;

        overflow-x: hidden;
    }

    body, input, textarea, button {
        font-family: "Inter", Arial, Helvetica, sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: var(--text-body);

        &:hover {
            filter: brightness(0.7);
            text-decoration: underline;
        }
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

		.hover-underline-animation {
			display: inline-block;
			position: relative;

			&:after {
				content: '';
				position: absolute;
				width: 100%;
				transform: scaleX(0);
				height: 2px;
				bottom: 0;
				left: 0;
				background-color: var(--sidebar-font-color);
				transform-origin: bottom right;
				transition: transform 0.25s ease-out;
			}

			&:hover:after {
				transform: scaleX(1);
				transform-origin: bottom left;
			}
		}

		.hover-underline-animation-purple {
			display: inline-block;
			position: relative;

			&:after {
				content: '';
				position: absolute;
				width: 100%;
				transform: scaleX(0);
				height: 2px;
				bottom: 0;
				left: 0;
				background-color: var(--anchor-color);
				transform-origin: bottom right;
				transition: transform 0.25s ease-out;
			}

			&:hover:after {
				transform: scaleX(1);
				transform-origin: bottom left;
			}
		}

		.link {
			&:hover {
				text-decoration: none;
			}
		}
`;

export { GlobalStyles };
