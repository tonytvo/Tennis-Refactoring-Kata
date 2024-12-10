# prepared checklists

[x] Watch prior setup video for guided learning practices.  
[] Access shared resources, such as a whiteboard.
[] Ensure exercises are accessible (setup code and tools).  
[] Provide team access to refactoring documentation.
  - https://refactoring.com/catalog/
  - https://www.jetbrains.com/help/idea/refactoring-source-code.html
[x] book the session
[] list of refactoring names in webstorm (do this, in the activity section)
  - rename variables -> rename...
  - break dependencies -> N/A
  - move up/down method -> pull members up/down
  - extract method -> extract method
  - extract subfunction -> N/A
  - remove dead code -> remove unused variable, N/A
[] practice branch name (starting-point-dec-9-2024)
[] tiles for sponsoring
[] linked in posts

# notes to review

## "refactoring: what you need to know" video notes

- https://www.youtube.com/watch?v=K7xSsNpeM8I&ab_channel=EmilyBache

Here's a detailed outline based on the transcript provided for **"REFACTORING: What You Need To Know | Guided Learning Hour"**:

---

### **1. Introduction to Refactoring**
- **Refactoring and Development**  
  - Question: *Are you refactoring while you develop?*
  - Refactoring helps manage **legacy code** and **technical debt**.  
  - Essential for **Test-Driven Development (TDD)**.  

- **Skill Development**  
  - Refactoring is a learnable skill.  
  - Practice and training improve proficiency.  

- **Guided Learning Overview**  
  - Team-based, hands-on training to develop **practical skills**.  
  - Outcomes: Improved code quality and team collaboration.

---

### **2. Team Setup and Activity Preparation**
- **Guided Learning Approach**  
  - Conducted collaboratively within development teams.  
  - Designed for direct application to daily work.  

- **Preparation Steps**  
  - Watch prior setup video for guided learning practices.  
  - Access shared resources, such as a whiteboard.

---

### **3. Understanding Refactoring**
- **Definition (Martin Fowler)**  
  - **Noun**: A change made to the internal structure of software to improve understandability and maintainability without altering observable behavior.  
  - **Verb**: The process of restructuring software by applying a series of refactorings.

- **Key Benefits**  
  - Makes code easier to understand.  
  - Reduces long-term development costs.

- **Motivation**  
  - Economic and efficiency-driven, not about programming superiority.

---

### **4. Refactoring Catalog and Tools**
- **Martin Fowler’s Resources**  
  - *Book*: Core refactoring concepts and detailed mechanics.  
  - *Website*: Summary of refactorings.

- **Examples**  
  - Rename (Variable, Field).  
  - Extract Variable (also referred to as "Introduce Variable" in tools like ReSharper).

- **Tool Usage**  
  - Modern tools simplify refactoring steps.  
  - Naming inconsistencies between tools and books should be addressed within teams.

---

### **5. Interactive Team Exercise**
- **Activity 1: Refactoring Vocabulary**  
  - List refactorings team members know.  
  - Match tool-specific terms with standard refactoring names.  

- **Activity 2: Refactoring a Code Example**  
  - Use a pre-prepared example, such as **Tennis Game 3**.  
  - Focus on improving naming and clarity.  
  - Example steps:
    1. Rename poorly named variables (`P1N`, `P1` -> `PlayerOneName`, `PlayerOnePoints`).
    2. Simplify complex expressions using extracted variables.
    3. Identify and split variables serving multiple purposes.

- **Guidelines for Practice**  
  - Take **small steps** and use tools for efficiency.  
  - Validate changes with tests frequently.

---

### **6. Facilitator’s Role**
- **Preparation**  
  - Ensure exercises are accessible (setup code and tools).  
  - Provide team access to refactoring documentation.

- **Session Facilitation**  
  - Organize team into pairs for coding exercises.  
  - Monitor progress and offer assistance:
    - **Advanced participants**: Encourage repeated runs for fluency.  
    - **Struggling participants**: Conduct group refactoring with guided suggestions. offer to be a typist and only type what other participants wants you to type.
      - if everyone struggling, we should be struggling together
      - what name should I use here?
      - what short-cut should I use for rename?
      - have the refactoring menu ready so people can see.

- **Time Management**  
  - Allocate time for reflection and conclusions.

---

### **7. Reflection and Conclusion**
- **Individual Reflection**  
  - Participants write personal definitions of refactoring.  
  - Prompts:  
    - How would you explain refactoring to a colleague?  
    - What surprised you about today’s session?  

- **Team Discussion**  
  - Share and align on vocabulary.  
  - Plan how to apply refactoring in daily work.

- **Wrap-Up**  
  - Recap session highlights.  
  - Encourage continued practice with shared exercises.

---

### **8. Facilitator’s Post-Session Review**
- **Checklist**  
  - Confirm that all team members understood the concepts.  
  - Reflect on session effectiveness.  
  - Gather feedback for improvements in future sessions.


## "Refactoring skills: extract function" guided learning hour

### **1. Introduction to Extract Function**
- **Purpose and Benefits**:
  - Makes code more **readable**, **testable**, and **maintainable**.
  - Reduces **duplication**.
  - Automates refactoring through tools like "Extract Function" or "Extract Method".
- **Fluency with Tools**:
  - Important to master both **tool-supported** and **manual** extraction techniques.
- **Session Goals**:
  - Understand the **Extract Function** refactoring.
  - Learn how to apply it safely and effectively.
- **Facilitator Role**:
  - Guide team discussions and exercises.
  - Set up the environment for coding practice.

---

### **2. Warm-Up Activity: Why Shorter Functions?**
- **Activity**:
  - Team brainstorms reasons for preferring shorter functions over longer ones.
  - Facilitator records responses on a shared whiteboard.
- **Possible Reasons**:
  1. Easier to read and understand.
  2. Reduces code duplication by reusing extracted functions.
  3. Separates **intention** (what the code does) from **implementation** (how it does it).
- **Key Takeaway**:
  - Extracting functions helps clarify the **intention** of code, making the larger function easier to reason about.

---

### **3. Understanding Extract Function**
- **Definition**:
  - Extract Function: Splitting a portion of code into a **new function or method**, named after its purpose.
  - Synonyms: "Extract Method."
- **Why Use It?**
  - Enhances **readability** and **understandability**.
  - Allows **reuse** of code across different parts of the application.
  - Separates **intention** from **implementation**.
- **Practical Example**:
  - Extracting logic into a function like `isTie()` to make its purpose immediately clear.

---

#### **4. Identifying Opportunities for Extraction**
- **Signs to Extract**:
  - **Duplication**: Repeated code that can be reused.
  - **Comments**: Indicate potential paragraphs of code with a clear purpose (e.g., "Regular Score").
  - **Logical Blocks**: Code that performs a distinct sub-task within a method.
- **Exercise**:
  - Teams review provided code (e.g., from "Tennis Game 6") and identify sections suitable for extraction.

---

#### **5. Demonstrating Extract Function**
- **Tool-Assisted Extraction**:
  - Highlight a section of code.
  - Use the refactoring tool to extract and name the new function.
  - Confirm with tests to ensure the behavior remains consistent.
- **Manual Extraction**:
  1. Copy code to a new function placeholder.
  2. Determine the **return value** and **parameters**.
  3. Replace the original block with a function call.
  4. Verify correctness using tests.
- **Example Walkthrough**:
  - Extraction of `tieScore`, `endGameScore`, and `regularScore` methods from the `getScore` method.
  - Use tools like **Rider** or manual techniques to ensure safe refactoring.

---

### **6. Coding Practice: Extract Function**
- **Setup**:
  - Teams work on the provided codebase in their preferred language.
  - Facilitator ensures the environment is ready and accessible.
- **Guidelines**:
  - Work in pairs to extract logical sections into separate functions.
  - Use safe, incremental steps:
    - Select code.
    - Extract using tools or manually.
    - Run tests frequently to validate.
- **Challenges**:
  - Teams finishing early can:
    - Repeat the exercise for fluency.
    - Perform manual refactoring without tools.
  - Teams struggling can:
    - Collaborate in a single group.
    - Take turns identifying and guiding extractions.

---

### **7. Reflection and Conclusion**
- **Individual Reflection**:
  - Each participant writes notes on:
    - Steps for safe extraction.
    - Key lessons from the session.
  - Prompts:
    - What is the importance of Extract Function?
    - How can this technique improve code quality in daily work?
- **Discussion**:
  - Share reflections and align on the value of Extract Function.
- **Application**:
  - Encourage participants to identify and apply Extract Function opportunities in production code.

---

#### **8. Facilitator’s Briefing**
- **Preparation**:
  - Ensure the coding exercise is accessible in the team’s preferred language.
  - Familiarize yourself with tools and provide resources/documentation.
- **Session Management**:
  - Timebox activities to ensure all sections are covered.
  - Monitor group progress, offering guidance as needed.
  - Adjust exercises for teams with varying skill levels.
- **Concluding Notes**:
  - Summarize session outcomes.
  - Encourage continued practice and reflection.
  - Gather feedback to improve future sessions.

---

### **Key Takeaways**
- Extract Function improves **readability**, **maintainability**, and **reusability**.
- Separating **intention** from **implementation** clarifies the purpose of code.
- Safe refactoring requires **incremental changes** and **frequent validation**.
- Refactoring tools are helpful but not essential; manual techniques are valuable in environments without tools.