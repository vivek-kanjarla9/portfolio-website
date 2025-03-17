import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import DriveFileIcon from '@mui/icons-material/InsertDriveFile';

const projects = [
  {
    id: 'autonomous-robot',
    title: 'Autonomous Navigation and Smart Interaction in Mecanum-Wheeled Robots',
    description: 'Developing an advanced autonomous navigation system for a Mecanum-wheeled robot designed for complex indoor environments with real-time path planning and obstacle avoidance capabilities.',
    fullDescription: `This ongoing project involves developing an advanced autonomous navigation system for a Mecanum-wheeled robot, specifically designed for navigating complex indoor environments. The robot aims to achieve robust real-time path planning, obstacle avoidance, and dynamic interaction capabilities.

## Visual Perception and Depth Estimation
- Currently working on utilizing lightweight MiDaS deep learning models for efficient real-time monocular depth estimation.
- Integrating YOLOv8 for accurate and real-time object detection, with a focus on precise identification of obstacles such as humans, chairs, and tables.

## Visual Odometry and SLAM
- Exploring ORB-based monocular Visual Odometry techniques to accurately estimate robot pose and trajectory.
- Investigating Structure from Motion (SfM) methods for detailed 3D environmental mapping from sequential 2D images.

## Sensor Fusion and Estimation
- Applying Kalman filters for sensor fusion, integrating visual odometry data with depth estimation to enhance accuracy.
- Developing methods to estimate angular velocity and linear acceleration without relying on IMU, optimizing computational efficiency.

## Real-Time Navigation and Path Planning
- Implementing global and local planning algorithms for dynamic decision-making in environments with both static and moving obstacles.
- Testing and refining advanced tracking algorithms (SORT and Deep SORT) to improve obstacle identification and tracking consistency.

## Vision-Language Model Integration
- Exploring the integration of Vision-Language Models (VLMs) to enable natural language-based robot interactions and commands.
- Integrating Context Barrier Functions (CBFs) to enhance contextual understanding and adaptive responses based on environmental conditions.

## Real-Time Optimization and Deployment
- Optimizing algorithm efficiency for real-time performance on a Windows laptop with an RTX 4060 GPU and 16GB RAM.
- Establishing effective serial communication protocols between the navigation system and Arduino-based motor controllers.

## Future Goals and Innovations
- Planning to incorporate generative AI for predictive modeling of human trajectories and behaviors.
- Aiming to develop digital twins for enhanced analysis, fault prediction, and fleet management capabilities applicable to drones, autonomous cars, and other vehicles.`,
    
    image: '/images/projects/bot.jpg',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'YOLOv8', 'SORT', 'Deep SORT', 'MiDaS', 'ORB-SLAM', 'Kalman Filters', 'Arduino'],
    live: '#',
    videoLink1: 'https://drive.google.com/file/d/1YCFgrRzdXubA0kvGkgIAyV6rXVlQ0sj5/view?usp=sharing',
    videoText1: 'Camera-Based Demo',
    videoLink2: 'https://drive.google.com/file/d/1iBOGs-YqAUI2gF29fV94TLDh7f3dpgrX/view?usp=sharing',
    videoText2: 'Sonar-Based Demo',
    timeline: 'September 2024 - Present',
    role: 'Independent Research Fellow',
  },
  {
    id: 'ev-path-finder',
    title: 'EV Path Finder: An Adaptive Algorithm for Energy-Efficient Electric Vehicle Navigation',
    description: 'An advanced energy-efficient navigation system for electric vehicles, prioritizing battery efficiency and real-time conditions.',
    fullDescription: `This project focused on developing an energy-efficient routing system for electric vehicles that optimizes travel paths based on battery constraints, charging infrastructure, and road conditions. Unlike traditional navigation systems, EV Path Finder considers the unique energy consumption patterns of electric vehicles to provide routes that minimize range anxiety and maximize efficiency.

**Key Features**

✅ Energy-Aware Routing – Computes optimized paths based on battery capacity, road slope, and speed limits.

✅ State-of-Charge Tracking – Ensures energy constraints are met while navigating.

✅ Intelligent Charging Integration – Incorporates charging stations with availability windows and multiple charging modes (slow, fast, super-fast).

✅ Graph-Based Pathfinding – Implements a modified Dijkstra's algorithm with priority queue-based shortest path search.

✅ Interactive Visualization – Provides real-time graphical insights into route, SoC, and energy consumption trends.

**Technology Stack**

🔹 Algorithm: Modified Dijkstra's Algorithm with label propagation for energy-aware pathfinding.

🔹 Backend: Python (NetworkX, NumPy) for graph-based computations.

🔹 Frontend: PyQt5 with Matplotlib for interactive map visualization.

🔹 Data Processing: Geopy for distance-based road modeling and heuristic calculations.

🔹 Optimization: Heap-based priority queue for efficient energy-constrained path search.

**Impact & Performance**

🚗 15% Reduction in energy consumption compared to shortest-path routing.

⚡ 90%+ Accuracy in predicting energy needs and state of charge (SoC).

📈 Seamless User Experience with transparent energy insights & adaptive route guidance.
`,
    image: '/images/projects/ev-pathfinder.png',
    technologies: ['Python', 'NetworkX', 'NumPy', 'PyQt5', 'Matplotlib', 'Geopy'],
    source: 'https://github.com/vivek-kanjarla/EV_path_finder',
    timeline: 'January 2023 - December 2023',
    role: 'Student Contributor',
    driveLink: 'https://drive.google.com/file/d/1oJUKMW2W3FD4P8wYCv7aN2NpesqzvymG/view?usp=sharing',
    driveText: 'Project Report'
  },
  {
    id: 'uart-robots',
    title: 'Coordinated Line-Following Robots with Obstacle Avoidance',
    description: 'Designed and implemented a coordinated robotic system of two autonomous line-following robots capable of navigating predefined paths while intelligently detecting and responding to obstacles.',
    fullDescription: `This project involves designing and implementing a coordinated robotic system consisting of two autonomous line-following robots capable of navigating predefined paths while intelligently detecting and responding to obstacles. The core objective is to demonstrate synchronized robot behavior through robust real-time communication and precise sensor-driven navigation strategies.


### Technical Specifications

#### Hardware Components
- **MegaPi Controller**: Serves as the central control unit for motor operation and sensor data integration.
- **Line Following Sensor (MeLineFollower)**: Enables accurate tracking along marked paths.
- **Ultrasonic Sonar Sensor (MeUltrasonicSensor)**: Provides obstacle detection within a 20 cm radius.
- **Gyroscope Sensor (MeGyro)**: Ensures stability and accurate directional orientation.
- **Encoder Feedback**: Facilitates precise motor speed and positional control.
- **XBee S2C Module**: Establishes robust peer-to-peer wireless communication (UART) between robots at 9600 bps.


### System Functionality

#### Navigation and Control Logic
Robots autonomously follow designated tracks using line sensors. The gyroscopic feedback and encoder data assist in maintaining stable trajectories and smooth turns, particularly during curves and intersection points. Adjustments to the robot's direction are continuously made based on real-time sensor feedback.


#### Obstacle Detection and Response
When an obstacle is detected by the ultrasonic sensor, the robot executes an immediate stop command and simultaneously transmits a halt signal ('0') through the XBee module to its counterpart. This ensures coordinated stopping, preventing potential collisions and demonstrating collective awareness and interaction.


#### Communication Protocol
Communication between the robots occurs via a UART-based serial protocol implemented through XBee S2C modules. The system uses simplified binary signaling—'1' indicates clearance to proceed, while '0' signals a stop command. This binary scheme ensures low latency and reliable messaging, crucial for synchronized robot operations.


### Application and Impact
This project showcases a foundational framework for autonomous and collaborative robotics applicable to industrial automation, warehouse logistics, and emergency response scenarios. The successful implementation illustrates practical robotics principles, including sensor fusion, wireless communication, and intelligent control strategies, highlighting potential advancements in automated system coordination and collaborative autonomy.`,
    
    image: '/images/projects/uart-robots.jpg',
    technologies: ['Embedded Systems', 'C/C++', 'UART', 'XBee', 'PID Control', 'Wireless Communication'],
    live: '#',
    driveLink: 'https://docs.google.com/presentation/d/1RzI8-c8RRj1MaGgZpB5-hKnpFbSzqV8r/edit?usp=sharing&ouid=111014179492715220062&rtpof=true&sd=true',
    driveText: 'Technical Documentation',
    videoLink: 'https://drive.google.com/file/d/1ZGA5ffZtOuWinBTXJbxebaAAZCPGnzoS/view?usp=sharing',
    videoText: 'Demo Video',
    timeline: 'January 2023 - May 2023',
    teamSize: '2 students'
  },
  {
    id: 'atomic-magnetometer',
    title: 'Design and Analysis of Miniature Atomic Magnetometers for Biomedical Applications',
    description: 'Researched and developed miniaturized atomic magnetometers for high-precision magnetic field measurements in biomedical applications, with a focus on cardiac and neural monitoring.',
    fullDescription: `**Overview**

This project focused on modeling and optimizing magnetic field uniformity for miniaturized atomic magnetometers used in biomedical applications, particularly magnetoencephalography (MEG). Using COMSOL Multiphysics, I simulated and analyzed various Helmholtz coil configurations to create the controlled magnetic environment necessary for high-precision measurements of brain activity.

 

**Key Features**

✅ 3D Electromagnetic Simulation – Modeled Helmholtz coil configurations in COMSOL Multiphysics to analyze the magnetic field distribution.

✅ Helmholtz Coil Optimization – Studied single and multi-coil configurations to achieve a uniform null background magnetic field for precise atomic magnetometer operation.

✅ Magnetic Field Homogeneity Analysis – Evaluated different coil distances and configurations to minimize field variations inside the vapor cell.

✅ Comparison of Coil Arrangements – Simulated and compared traditional Helmholtz coils vs. a six-coil cubic configuration, revealing significant variations in field uniformity.

✅ Performance Evaluation – Quantified the effectiveness of coil configurations, identifying constraints and areas for improvement in miniaturized atomic magnetometers.

 

**Technology Stack**

🔹 Computational Modeling: COMSOL Multiphysics for finite element analysis (FEA) of magnetic field distribution.

🔹 Magnetic Optimization: Helmholtz coil placement adjustments to achieve optimal field uniformity for atomic magnetometer accuracy.

🔹 Parametric Studies: Investigated effects of coil spacing, current intensity, and geometric scaling on magnetic field homogeneity.

 

**Impact & Performance**

📊 Validation of Helmholtz Coil Configurations – Simulated results demonstrated that traditional Helmholtz coils provided superior field uniformity compared to the six-coil cubic arrangement.

⚡ Magnetic Field Control for MEG Sensors – Findings contribute to the development of compact, high-precision atomic magnetometers for non-invasive brain function measurement.`,
    
    image: '/images/projects/atomic-magnetometer.png',
    technologies: ['COMSOL Multiphysics', 'Electromagnetic Simulation', 'Helmholtz Coils', 'MEG', 'Finite Element Analysis'],
    driveLink: 'https://drive.google.com/file/d/1fLjyOIxBJZFijCQothowQ9M8sm4A2j1L/view?usp=sharing',
    driveText: 'Project Presentation',
    timeline: 'September 2021 - December 2021',
    role: 'Course Project Participant',
    teamSize: '3 students'
  },
  {
    id: 'depression-nlp',
    title: 'Detecting Expressed Human Needs in Depression-Related Social Media Posts',
    description: 'Explored the relationship between human needs and depression as expressed in social media posts using GPT-3 for classification according to Maslow\'s Hierarchy of Needs.',
    fullDescription: `## Project Overview
This research project investigates the relationship between human needs and depression as expressed in social media posts from the r/depression subreddit. By analyzing how individuals articulate their unmet needs, we aim to understand the bidirectional relationship between unfulfilled needs and depression.


## Motivation & Research Questions
Depression is a complex mental health disorder influenced by psychological, social, and environmental factors. Traditional binary depression detection models provide limited insights into underlying causes. Our study addresses three key questions:

1. Are human needs correlated with depression?
2. How do expressions of needs differ between depressed users and control groups?
3. Can Large Language Models (LLMs) effectively detect needs underlying depressive posts?


## Methodology

### Dataset & Preprocessing
- Collected 20,000 posts each from r/depression and control subreddits
- Focused on English-language posts with sufficient content length
- Removed posts containing images, URLs, and non-textual elements


### Classification Framework
- **Maslow's Hierarchy Classification**:
  - Basic Needs: Physiological, Love, Stability (Safety)
  - Advanced Needs: Esteem, Spiritual Growth
  - None: Posts with no clear need expression

- **Needs Categorization**:
  - Trigger Needs: Unfulfilled needs contributing to depression
  - Effect Needs: Needs emerging due to depression


### Technical Implementation
- Implemented GPT-3 Zero-Shot Classification for need detection
- Designed specialized natural language prompts
- Applied self-verification mechanisms to improve classification accuracy
- Conducted topic modeling (LDA) and linguistic analysis


## Results & Performance

### Key Findings
- Strong correlation between unmet needs and depressive tendencies
- Significant variation in need expression patterns between groups
- GPT-3 demonstrated promising capability with proper prompt engineering


### Model Metrics
- Initial accuracy: ~36.9% (imbalanced data)
- Final accuracy after augmentation: ~58.4%
- Improved precision, recall, and F1-scores across all categories


## Conclusion & Impact
This study introduces a novel approach to analyzing human needs in depressive social media posts. The identified patterns could aid in developing more targeted mental health interventions.`,
    
    image: '/images/projects/depression-nlp.png',
    technologies: ['Natural Language Processing', 'GPT-3', 'Transformers', 'Python', 'TensorFlow', 'Ethics in AI'],
    timeline: 'January 2022 - June 2022',
    role: 'Lead Researcher and Student Contributor',
    teamSize: '4 students'
  }
];

export default projects;
