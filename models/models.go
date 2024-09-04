package models

type Todo struct {
	ID       int    `json:"id"`
	priority int    `json:"title"`
	due      string `json:"due"`
	status   string `json:"status"`
	name     string `json:"name"`
}
