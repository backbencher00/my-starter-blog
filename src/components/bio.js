/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import './muiicon.css'
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import ClosedCaptionIcon from '@material-ui/icons/ClosedCaption';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <p>
          I write about algorithmic solutions for software engineering problems, interesting programming tips & tricks. May also include Machine Learning, Natural Language Processing and Blockchain.
          <br/>
          <ul className="list">
          <a className="l1" href="https://www.linkedin.com/in/sourabhsingh282/"><LinkedInIcon/></a>
            <a className="l1" href="https://www.codechef.com/users/sourabhsingh28"><ClosedCaptionIcon/></a>

            <a className="l1" href="https://github.com/sourabhsingh282"><GitHubIcon/></a>
            <a className="l1" href="https://www.instagram.com/sourabhsingh282/"><InstagramIcon/></a>
            {/* <MailIcon/><span>sourabhsingh282@gmail.com</span> */}

          </ul>
        </p>
      )}
    </div>
  )
}

export default Bio
