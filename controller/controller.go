package controller

import (
	"TaskMeltEnigma/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

var todos = []models.Todo{}

func Root(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", nil)
}

func CreateTodo(c *gin.Context) {
	newTodo := models.Todo{}

	// convert JSON to struct
	err := c.BindJSON(&newTodo)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// append to todos list
	todos = append(todos, newTodo)
}

func GetTodos(c *gin.Context) {
	c.JSON(http.StatusOK, todos)
}
