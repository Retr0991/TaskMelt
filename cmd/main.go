package main

import (
	"TaskMeltEnigma/controller"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()

	r.LoadHTMLGlob("../public/src/*.html")
	r.Static("/assets", "../public")

	r.GET("/", controller.Root)
	r.GET("/getlist", controller.GetTodos)
	r.POST("/createtodo", controller.CreateTodo)
	r.GET("/gettask/:id", controller.GetTask)
	r.PUT("/updatetask/:id", controller.UpdateTask)

	port := os.Getenv("PORT")
	if port == "" {
		r.Run()
	} else {
		r.Run(":" + port)
	}
}
