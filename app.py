from flask import Flask, render_template

app = Flask(__name__)

# ================= HOME & AUTH =================
@app.route("/")
def home():
    return render_template("home.html")

@app.route("/login")
def login():
    return render_template("signin.html")


# ================= DASHBOARDS =================
@app.route("/customer_dashboard")
def customer_dashboard():
    return render_template("customer_dashboard.html")

@app.route("/delivery_dashboard")
def delivery_dashboard():
    return render_template("delivery_dashboard.html")

@app.route("/admin_dashboard")
def admin_dashboard():
    return render_template("admin_dashboard.html")

@app.route('/restaurant_dashboard')
def restaurant_dashboard():
    return render_template('restaurant_dashboard.html')

@app.route('/restaurant_orders')
def restaurant_orders():
    return "Orders Page"

@app.route('/restaurant_menu')
def restaurant_menu():
    return "Menu Page"



# ================= CUSTOMER PAGES =================
@app.route("/menu")
def menu():
    return render_template("menu.html")

@app.route("/search")
def search():
    return render_template("search.html")

@app.route("/cart")
def cart():
    return render_template("cart.html")

@app.route("/checkout")
def checkout():
    return render_template("checkout.html")

@app.route("/tracking")
def tracking():
    return render_template("order_tracking.html")

@app.route("/history")
def history():
    return render_template("order_history.html")

@app.route("/profile")
def profile():
    return render_template("profile.html")

@app.route("/address")
def address():
    return render_template("address_management.html")


# ================= RESTAURANT PAGES =================
@app.route("/restaurants")
def restaurants():
    return render_template("restaurant_list.html")

@app.route("/menu_res")
def menu_res():
    return render_template("menu.html")

@app.route("/order-management")
def order_management():
    return render_template("order_management.html")


# ================= DELIVERY PAGES =================
@app.route("/delivery-history")
def delivery_history():
    return render_template("delivery_history.html")


if __name__ == "__main__":
    app.run(debug=True)
