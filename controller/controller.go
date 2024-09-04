package controller

import (
	"TaskMeltEnigma/models"
	"fmt"
	"net/http"
	"strconv"

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

	newTodo.ID = len(todos) + 1
	// append to todos list
	fmt.Println(newTodo.Name)
	todos = append(todos, newTodo)

	c.JSON(200, gin.H{"All": "Good"})
}

func GetTodos(c *gin.Context) {
	c.JSON(http.StatusOK, todos)
}

func GetTask(c *gin.Context) {
	id, _ := strconv.Atoi(c .Param("id"))
	for _, task := range todos {
		if task.ID == id {
			c.JSON(200, task)
			return
		}
	}
}

func UpdateTask(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	updatedTask := models.Todo{}
	err := c.BindJSON(&updatedTask)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	fmt.Println(updatedTask.Status)

	for i, task := range todos {
		if task.ID == id {
			todos[i] = updatedTask
			c.JSON(200, updatedTask.Status)
			return
		}
	}
}
