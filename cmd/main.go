package main

import (
	"TaskMeltEnigma/controller"

	"github.com/gin-gonic/gin"
)

func main() {

	r := gin.Default()

	r.LoadHTMLGlob("../public/src/*.html")
	r.Static("/assets", "../public")

	r.GET("/", controller.Root)
	r.GET("/getlist", controller.GetTodos)
	r.POST("/createtodo", controller.CreateTodo)
	r.GET("/gettask/:id", controller.GetTask)
	r.PUT("/updatetask/:id", controller.UpdateTask)

	r.Run(":8000")
}
