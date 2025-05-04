// Add this to your existing script.js file

// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", () => {
    // Get DOM elements
    const hamburgerBtn = document.querySelector(".hamburger-btn")
    const navOverlay = document.querySelector(".nav-overlay")
    const navClose = document.querySelector(".nav-close")
  
    // Function to open the menu
    function openMenu() {
      navOverlay.classList.add("active")
      hamburgerBtn.classList.add("active")
      document.body.style.overflow = "hidden" // Prevent scrolling when menu is open
    }
  
    // Function to close the menu
    function closeMenu() {
      navOverlay.classList.remove("active")
      hamburgerBtn.classList.remove("active")
      document.body.style.overflow = "" // Re-enable scrolling
    }
  
    // Event listeners
    hamburgerBtn.addEventListener("click", openMenu)
    navClose.addEventListener("click", closeMenu)
  
    // Close menu when clicking escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navOverlay.classList.contains("active")) {
        closeMenu()
      }
    })
  
    // Initialize Locomotive Scroll
  
    // Your existing JavaScript code below this line
  })
  
  gsap.registerPlugin(ScrollTrigger)
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  })
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update)
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
  })
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update())
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh()
  
  function navbarAnimation() {
    gsap.to("#nav-part1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    })
    gsap.to("#nav-part2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    })
  }
  navbarAnimation()
  
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  })
  
  function videoconAnimation() {
    var videocon = document.querySelector("#video-container")
  
    var playbtn = document.querySelector("#play")
  
    videocon.addEventListener("mouseenter", () => {
      gsap.to(playbtn, {
        opacity: 1,
        scale: 1,
      })
    })
    videocon.addEventListener("mouseleave", () => {
      gsap.to(playbtn, {
        opacity: 0,
        scale: 0,
      })
    })
  
    videocon.addEventListener("mousemove", (dets) => {
      gsap.to(playbtn, {
        left: dets.x - 70,
        top: dets.y - 70,
      })
    })
  }
  videoconAnimation()
  
  function loadingAnimation() {
    gsap.from("#page1 h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.8,
      stagger: 0.3,
    })
    gsap.from("#page1 #video-container", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.8,
    })
  }
  loadingAnimation()
  
  function navbarAnimation2() {
    gsap.to("#nav-part1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    })
    gsap.to("#nav-part2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    })
  }
  navbarAnimation2()
  
  document.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    })
  })
  
  document.querySelector("#child3").addEventListener("mouseenter", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
      backgroundColor: "#F8986F",
    })
  })
  document.querySelector("#child3").addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    })
  })
  
  document.querySelectorAll(".child").forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      if (elem.id !== "child3") {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(1)",
          backgroundColor: "#ffffff", // White color for other elements
        })
      }
    })
    elem.addEventListener("mouseleave", () => {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      })
    })
  })
  
  function cursorAnimation() {
    document.addEventListener("mousemove", (dets) => {
      gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
      })
    })
    // document.querySelector("#child1").addEventListener("mouseenter",function(){
  
    // })
  
    // document.querySelector("#child1").addEventListener("mouseleave",function(){
    //   gsap.to("#cursor",{
    //     transform: 'translate(-50%,-50%) scale(0)'
    //   })
    // })
    document.querySelectorAll(".child").forEach((elem) => {
      elem.addEventListener("mouseenter", () => {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(1)",
        })
      })
      elem.addEventListener("mouseleave", () => {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(0)",
        })
      })
    })
  }
  cursorAnimation()
  
  // Add this to your existing script.js file
  
  // Hamburger menu functionality
  document.addEventListener("DOMContentLoaded", () => {
    // Get DOM elements - fixing selector to match the HTML
    const hamburgerBtn = document.querySelector(".ri-menu-fill")
  
    // Create nav overlay since it doesn't exist in the HTML
    const navOverlay = document.createElement("div")
    navOverlay.className = "nav-overlay"
    navOverlay.innerHTML = `
          <div class="nav-container">
              <div class="nav-header">
                  <div class="nav-close">×</div>
              </div>
              <div class="nav-links">
                  <a href="#">Shop</a>
                  <a href="#">Catering</a>
                  <a href="#">Donate</a>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
              </div>
          </div>
      `
    document.body.appendChild(navOverlay)
  
    const navClose = document.querySelector(".nav-close")
  
    // Function to open the menu
    function openMenu() {
      navOverlay.classList.add("active")
      hamburgerBtn.classList.add("active")
      document.body.style.overflow = "hidden" // Prevent scrolling when menu is open
    }
  
    // Function to close the menu
    function closeMenu() {
      navOverlay.classList.remove("active")
      hamburgerBtn.classList.remove("active")
      document.body.style.overflow = "" // Re-enable scrolling
    }
  
    // Event listeners
    hamburgerBtn.addEventListener("click", openMenu)
    navClose.addEventListener("click", closeMenu)
  
    // Close menu when clicking escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navOverlay.classList.contains("active")) {
        closeMenu()
      }
    })
  
    // Initialize Locomotive Scroll
  
    // Custom cursor
    const cursor = document.querySelector("#cursor")
  
    document.addEventListener("mousemove", (dets) => {
      cursor.style.left = dets.x + "px"
      cursor.style.top = dets.y + "px"
    })
  
    // GSAP animations
    gsap.to("#nav", {
      backgroundColor: "#000",
      duration: 0.5,
      height: "110px",
      scrollTrigger: {
        trigger: "#nav",
        scroller: "#main",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
      },
    })
  
    // Video container animation
    gsap.to("#video-container", {
      width: "100%",
      scrollTrigger: {
        trigger: "#video-container",
        scroller: "#main",
        start: "top 55%",
        end: "top 30%",
        scrub: 2,
      },
    })
  
    // Page 3 animations
    gsap.from(".child", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
      },
    })
  })
  
  document.querySelector(".footer").addEventListener("mouseenter", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
      backgroundColor: "#F8ED8C",
    })
  })
  document.querySelector(".footer").addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    })
  })
  
  document.querySelectorAll("a").forEach((link) => {
    if (link.id !== "no") {
      link.href = "https://www.instagram.com/_shauryasingh__/"
    }
  })
  
  // Enhanced Self-Care Box Functionality
  document.addEventListener("DOMContentLoaded", () => {
    const selected = []
    const maxItems = 5
    const boxPreview = document.querySelector(".box-preview")
  
    // Create drop indicator
    const dropIndicator = document.createElement("div")
    dropIndicator.className = "drop-indicator"
    dropIndicator.innerHTML = "Drop your item here"
    dropIndicator.style.display = "none"
    boxPreview.appendChild(dropIndicator)
  
    // Initialize product items with images
    document.querySelectorAll(".product-item").forEach((item, index) => {
      // Set product images if they don't have one
      if (item.querySelector("img").src.includes("placeholder") || item.querySelector("img").src.includes("...")) {
        const colors = ["#F8986F", "#8ED081", "#D0D8E3", "#ECDCD5", "#B4D2BA", "#F8ED8C"]
        const colorIndex = index % colors.length
  
        const img = item.querySelector("img")
        img.src = `/placeholder.svg?height=100&width=100`
        img.style.backgroundColor = colors[colorIndex]
        img.style.borderRadius = "8px"
      }
  
      // Setup drag events
      item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("name", item.dataset.name)
        e.dataTransfer.setData("price", item.dataset.price)
        item.classList.add("dragging")
  
        // Show drop indicator in the box
        dropIndicator.style.display = "flex"
        boxPreview.classList.add("highlight-drop")
      })
  
      item.addEventListener("dragend", () => {
        item.classList.remove("dragging")
        dropIndicator.style.display = "none"
        boxPreview.classList.remove("highlight-drop")
      })
    })
  
    // Box drop events
    boxPreview.addEventListener("dragover", (e) => {
      e.preventDefault()
      boxPreview.classList.add("active-drop")
    })
  
    boxPreview.addEventListener("dragleave", () => {
      boxPreview.classList.remove("active-drop")
    })
  
    boxPreview.addEventListener("drop", (e) => {
      e.preventDefault()
      boxPreview.classList.remove("active-drop")
      boxPreview.classList.remove("highlight-drop")
      dropIndicator.style.display = "none"
  
      const name = e.dataTransfer.getData("name")
      const price = Number.parseInt(e.dataTransfer.getData("price"))
  
      if (selected.length >= maxItems) {
        showToast(`Your box is full! (Max ${maxItems} items)`, "warning")
        return
      }
  
      // Add item to box
      selected.push({ name, price })
      updateBox()
  
      // Create sparkle effect
      createSparkles(e.clientX, e.clientY)
  
      // Show success toast
      showToast(`${name} added to your box!`, "success")
    })
  
    // Function to update box contents
    function updateBox() {
      const list = document.getElementById("selectedItems")
      list.innerHTML = ""
  
      if (selected.length === 0) {
        list.innerHTML = '<li class="empty-message">Your box is empty. Drag items here!</li>'
      } else {
        selected.forEach((item, index) => {
          const li = document.createElement("li")
          li.innerHTML = `
                      <div class="box-item">
                          <span>${item.name} - ₹${item.price}</span>
                          <button class="remove-btn" data-index="${index}">×</button>
                      </div>
                  `
          list.appendChild(li)
        })
  
        // Add event listeners to remove buttons
        document.querySelectorAll(".remove-btn").forEach((btn) => {
          btn.addEventListener("click", function () {
            const index = Number.parseInt(this.dataset.index)
            const removedItem = selected.splice(index, 1)[0]
            showToast(`${removedItem.name} removed from your box`, "info")
            updateBox()
          })
        })
      }
  
      // Update total price
      const total = selected.reduce((sum, item) => sum + item.price, 0)
      document.getElementById("totalPrice").innerText = `Total: ₹${total}`
  
      // Update button states
      document.querySelector('button[onclick="previewBox()"]').disabled = selected.length < 3
      document.querySelector('button[onclick="addToCart()"]').disabled = selected.length < 3
    }
  
    // Function to create sparkle effect
    function createSparkles(x, y) {
      const sparkleContainer = document.createElement("div")
      sparkleContainer.className = "sparkle-container"
      sparkleContainer.style.position = "fixed"
      sparkleContainer.style.left = `${x}px`
      sparkleContainer.style.top = `${y}px`
      sparkleContainer.style.pointerEvents = "none"
      document.body.appendChild(sparkleContainer)
  
      // Create multiple sparkles
      for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement("div")
        sparkle.className = "sparkle"
  
        // Random position around the center
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * 100
        const sparkleX = Math.cos(angle) * distance
        const sparkleY = Math.sin(angle) * distance
  
        // Random color
        const hue = Math.floor(Math.random() * 360)
  
        sparkle.style.left = `${sparkleX}px`
        sparkle.style.top = `${sparkleY}px`
        sparkle.style.backgroundColor = `hsl(${hue}, 100%, 70%)`
        sparkle.style.animationDuration = `${0.5 + Math.random() * 0.5}s`
  
        sparkleContainer.appendChild(sparkle)
      }
  
      // Remove sparkle container after animation completes
      setTimeout(() => {
        sparkleContainer.remove()
      }, 1000)
    }
  
    // Enhanced toast notification
    function showToast(message, type = "success") {
      const toast = document.createElement("div")
      toast.className = `toast toast-${type}`
      toast.innerHTML = `
              <div class="toast-icon">${type === "success" ? "✓" : type === "warning" ? "!" : "i"}</div>
              <div class="toast-message">${message}</div>
          `
  
      document.body.appendChild(toast)
  
      // Animate in
      setTimeout(() => {
        toast.classList.add("show")
      }, 10)
  
      // Remove after delay
      setTimeout(() => {
        toast.classList.remove("show")
        setTimeout(() => toast.remove(), 300)
      }, 3000)
    }
  
    // Preview box function
    window.previewBox = () => {
      if (selected.length < 3) {
        showToast("Please select at least 3 items!", "warning")
        return
      }
  
      const carousel = document.getElementById("previewItemsCarousel")
      carousel.innerHTML = ""
  
      // Create a visual representation of the box
      const boxVisual = document.createElement("div")
      boxVisual.className = "box-visual"
  
      // Add gift box image
      const boxImage = document.createElement("div")
      boxImage.className = "box-image"
      boxImage.innerHTML = `
              <div class="box-lid"></div>
              <div class="box-container"></div>
          `
      boxVisual.appendChild(boxImage)
  
      // Add items to the box
      const itemsList = document.createElement("div")
      itemsList.className = "preview-items-list"
      selected.forEach((item) => {
        const itemElem = document.createElement("div")
        itemElem.className = "preview-item"
        itemElem.innerHTML = `
                  <div class="preview-item-color" style="background-color: ${getRandomColor()}"></div>
                  <p>${item.name} - ₹${item.price}</p>
              `
        itemsList.appendChild(itemElem)
      })
      boxVisual.appendChild(itemsList)
  
      // Add total
      const total = selected.reduce((sum, item) => sum + item.price, 0)
      const totalElem = document.createElement("div")
      totalElem.className = "preview-total"
      totalElem.innerHTML = `<p>Total: ₹${total}</p>`
      boxVisual.appendChild(totalElem)
  
      carousel.appendChild(boxVisual)
      document.getElementById("modal").classList.remove("hidden")
    }
  
    // Add to cart function
    window.addToCart = () => {
      if (selected.length < 3) {
        showToast("Please select at least 3 items!", "warning")
        return
      }

      // Show flash message as placeholder for backend functionality
  const flashMessage = document.createElement("div");
  flashMessage.className = "cart-flash-message";
  
  // Calculate total price
  const total = selected.reduce((sum, item) => sum + item.price, 0);
  
  // Build HTML for the flash message
  flashMessage.innerHTML = `
    <div class="flash-header">
      <h3>🛒 Adding to Cart</h3>
      <button class="flash-close" onclick="this.parentNode.parentNode.remove()">×</button>
    </div>
    <div class="flash-content">
      <p><strong>${selected.length} items</strong> are being added to your cart.</p>
      <p>Total: ₹${total}</p>
      <div class="flash-loading">
        <div class="flash-loading-bar"></div>
      </div>
      <p class="flash-note">This is a placeholder for backend functionality.</p>
    </div>
  `;
  
  document.body.appendChild(flashMessage);
  
  // Animate in
  setTimeout(() => {
    flashMessage.classList.add("active");
  }, 10);
  
  // Simulate processing and show success
  setTimeout(() => {
    flashMessage.querySelector(".flash-loading-bar").style.width = "100%";
    flashMessage.querySelector(".flash-note").textContent = "Items successfully added to cart!";
    showToast("Items added to your cart!", "success");
    
    // Auto-remove after delay
    setTimeout(() => {
      flashMessage.classList.remove("active");
      setTimeout(() => flashMessage.remove(), 500);
    }, 3000);
  }, 2000);
  
      // Show order form
      document.getElementById("orderFormModal").classList.remove("hidden")
    }
  
    // Place order function
    window.placeOrder = (e) => {
      e.preventDefault()
      const form = document.getElementById("orderForm")
      const name = form.elements["name"].value
  
      // Simulate order placement
      showToast(`Thank you, ${name}! Your self-care box has been ordered.`, "success")
      document.getElementById("orderFormModal").classList.add("hidden")
  
      // Clear the box after successful order
      selected.length = 0
      updateBox()
    }
  
    // Reset box function
    window.resetBox = () => {
      if (selected.length === 0) {
        showToast("Your box is already empty!", "info")
        return
      }
  
      selected.length = 0
      updateBox()
      showToast("Your box has been reset", "info")
    }
  
    // Close modal function
    window.closeModal = () => {
      document.getElementById("modal").classList.add("hidden")
      document.getElementById("orderFormModal").classList.add("hidden")
    }
  
    // Helper function to get random color
    function getRandomColor() {
      const colors = ["#F8986F", "#8ED081", "#D0D8E3", "#ECDCD5", "#B4D2BA", "#F8ED8C"]
      return colors[Math.floor(Math.random() * colors.length)]
    }
  
    // Initialize the box
    updateBox()
  })
  
  function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger)
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    })
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update)
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
    })
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update())
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh()
  }
  locomotiveAnimation()
  
  