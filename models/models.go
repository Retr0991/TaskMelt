package models

type Todo struct {
	ID       int    `json:"id"`
	Priority int    `json:"priority"`
	Due      string `json:"due"`
	Status   string `json:"status"`
	Name     string `json:"name"`
}
