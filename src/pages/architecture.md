# Architecture Overview

The backend has local environment variables for the API key and url. The frontend makes an API call to the locally hosted backend to grab the syllabus information. The backend then uses the API key and URL to make an API call to Applebaum's syllabus server to relay the information.

# Use Cases

1. A student checks if there is an event today
2. Browse all events for the remainder of the semester

```mermaid
    sequenceDiagram
    actor student
    participant Frontend
    participant API Proxi
    participant Applebaum API

    student->>Frontend: accesses website
    activate Frontend
    Frontend->>API Proxi: API call
    deactivate Frontend
    activate API Proxi
    API Proxi->>Applebaum API: API call
    deactivate API Proxi
    Applebaum API -->> API Proxi: return
    activate API Proxi
    API Proxi -->> Frontend : return
    
    deactivate API Proxi
    activate Frontend
    Frontend ->> Frontend: website is loaded
    deactivate Frontend
    student->> Frontend: reads information
    
```

# Class Diagram


```mermaid
    classDiagram
    class Frontend {
        -array: columns
        -array: rows
        -fetchCourseEvents()
    }

    class ProxyAPI {
        -app : Express
        -getCourseEvents()
        -errorHandler()
    }

    class SyllabusAPI {
        -Obj: Syllabus Events
        -getEvents()
    }

    Frontend --> ProxyAPI : uses
    ProxyAPI --> SyllabusAPI : communicates with
```



