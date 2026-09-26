# ABS Simulator

A lightweight browser-based simulator for exploring a four-wheel hydraulic braking system with ABS behavior. The app visualizes wheel slip, braking force, stopping distance, and the effect of different road surfaces under braking conditions.

## Overview

This project demonstrates how an anti-lock braking system (ABS) responds to driver input, road grip, and wheel slip. It includes:

- Adjustable vehicle speed, pedal input, and brake timing
- Multiple road surfaces: tarmac, concrete, and oily/low-grip
- ABS on/off comparison
- 3D vehicle visualization and brake assembly detail view
- Live metrics for slip, stopping distance, stopping time, and wheel state

## Tech Stack

- Node.js
- Express
- Three.js
- HTML/CSS/JavaScript

## Project Structure

```bash
abs-simulator/
├── public/
│   └── index.html
├── package.json
├── server.js
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/HARSHNAIK-ctrl/ABS-SIMULATOR.git
cd ABS-SIMULATOR
```

2. Install dependencies:

```bash
npm install
```

## Run the App

Start the local server:

```bash
node server.js
```

Then open:

```text
http://localhost:3000
```

## Features

- Brake pedal and speed controls
- Road surface selection
- ABS controller toggle
- Real-time slip visualization
- Compare ABS on/off behavior
- Compare multiple road surfaces
- Internal wheel/brake assembly readouts

## Notes

This project is intended for educational and demonstration purposes. It models core ABS logic conceptually to help visualize how wheel slip is managed during braking.

## License

This project is licensed under the ISC License.
