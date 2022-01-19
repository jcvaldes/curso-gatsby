import * as React from "react"
import Layout from "../components/layout"
import { Button } from "semantic-ui-react"
const IndexPage = () => (
  <Layout>
    <h1>hola</h1>
    <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
    <div>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </div>
  </Layout>
)

export default IndexPage
