# DupAlerts : Smart cloud solution

## SIH1659 : Data download Duplication Alert System (DDAS)

### Background
* In an institute or organization, several users may need access to the same datasets for different purposes.
* Due to a lack of communication or visibility into existing downloads, these users may unintentionally download the same dataset multiple times.
* This duplication leads to wasted resources, including bandwidth and storage, and makes data management more complex.

### Objective
* The DDAS aims to address this problem by alerting users when they try to download a dataset that has already been downloaded by someone else within the organization.
* The system maintain logs of metadata for all downloaded datasets. This metadata includes details like file names, owners, cid, departments, and time.

### Features
* IPFS Hashing: Utilizes IPFS hashing to detect duplicates even if file names differ, ensuring accurate identification.
* Download Alerts: Notifies users at the time of download if the file has already been downloaded by another user, providing a link to the original file.
* Real-Time Synchronization: Ensures up-to-date information and alerts by synchronizing downloaded datasets across users in real-time with Firebase.
* Intuitive UI: Features a user-friendly interface with search and filter functionality for easy navigation and dataset management.
* Resource Conservation: Helps users avoid unnecessary downloads, conserving resources, saving time, and simplifying data management.

### Applications
This system is applicable across various fields and industries, including:
* Academic Institutions: Prevents duplication in research projects and promotes efficient collaboration by making existing datasets easily accessible.
* Research Facilities: Manages large scientific datasets efficiently and fosters better data sharing in cross-disciplinary research.
* Government Agencies: Optimizes data storage and bandwidth in data-intensive operations and enhances interdepartmental coordination.
* Corporate Environments: Avoids unnecessary duplication in data analytics and ensures efficient data management across global operations.
* Libraries and Archives: Efficiently manages digital collections, preventing redundant downloads.
* Healthcare and Biotech Organizations: Prevents redundant downloads in medical data repositories, ensuring efficient data handling.

### Tech Stack 
* React : Front-end framework for building a dynamic and responsive user interface.
* IPFS : Decentralized storage system for content-addressable file storage, ensuring reliable duplication detection.
* Firebase : Real-time database and authentication services for seamless data management and synchronization.

### [Watch the demo video here!](https://drive.google.com/file/d/1fx6PEvnsBxaBii4cKfxjnC9FQOUsFhwi/view?usp=sharing)


### Future Improvement Scope
* Local Download Alerts: Warns users before downloading if the file has already been downloaded by them on their local system.
* Role-Based Access Control: Only authorized users can approve downloads and delete files, enhancing security and data integrity.
* User Feedback Mechanism: Allows users to report false positives and suggest improvements, contributing to the system's continuous refinement.

### Team members

[![Static Badge](https://img.shields.io/badge/Shobhit%20Singh%20-github%20)](https://github.com/Shobhitsingh-2503)
[![Static Badge](https://img.shields.io/badge/Udit%20Shukla%20-github%20)](https://github.com/udit1905)
[![Static Badge](https://img.shields.io/badge/Piyush%20Kumar%20-github%20)](https://github.com/piyush7703)
[![Static Badge](https://img.shields.io/badge/Saksham%20Pandey%20-github%20)](https://github.com/ZeroiQsaksham)
[![Static Badge](https://img.shields.io/badge/Kumari%20Muskan%20-github%20)](https://github.com/MuskanJ30)
[![Static Badge](https://img.shields.io/badge/Amisha%20Rana%20-github%20)](https://github.com/ami1129)




