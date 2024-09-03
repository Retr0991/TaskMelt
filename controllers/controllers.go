package controllers

import {
	"github.com/gin-gonic/gin"
	"net/http"
	"TaskManager/models"
}

func root(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", nil)
}