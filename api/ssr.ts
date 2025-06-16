// api/ssr.ts
import { createPageRender } from 'vike/server'
import express from 'express'
import { createServerlessRequestHandler } from '@vercel/node'

const renderPage = createPageRender()

export default createServerlessRequestHandler(async (req, res) => {
  const pageContextInit = {
    urlOriginal: req.url!,
    userAgent: req.headers['user-agent']
  }

  const pageContext = await renderPage(pageContextInit)

  if (!pageContext.httpResponse) {
    res.statusCode = 404
    res.end('Page Not Found')
    return
  }

  const { body, statusCode, contentType } = pageContext.httpResponse
  res.statusCode = statusCode
  res.setHeader('Content-Type', contentType)
  res.end(body)
})
