(()=>{var e={};e.id=120,e.ids=[120],e.modules={163:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unstable_rethrow",{enumerable:!0,get:function(){return n}});let n=r(8661).unstable_rethrow;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},536:(e,t,r)=>{"use strict";function n(){return null}r.r(t),r.d(t,{default:()=>n})},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},899:(e,t,r)=>{"use strict";function n(){throw Object.defineProperty(Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E411",enumerable:!1,configurable:!0})}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unauthorized",{enumerable:!0,get:function(){return n}}),r(8704).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},918:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(6373).A)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]])},1358:(e,t,r)=>{"use strict";r.d(t,{BT:()=>c,Wu:()=>u,ZB:()=>l,Zp:()=>i,aR:()=>s});var n=r(7413),a=r(1120),o=r(6819);let i=a.forwardRef(({className:e,...t},r)=>(0,n.jsx)("div",{ref:r,className:(0,o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));i.displayName="Card";let s=a.forwardRef(({className:e,...t},r)=>(0,n.jsx)("div",{ref:r,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",e),...t}));s.displayName="CardHeader";let l=a.forwardRef(({className:e,...t},r)=>(0,n.jsx)("div",{ref:r,className:(0,o.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t}));l.displayName="CardTitle";let c=a.forwardRef(({className:e,...t},r)=>(0,n.jsx)("div",{ref:r,className:(0,o.cn)("text-sm text-muted-foreground",e),...t}));c.displayName="CardDescription";let u=a.forwardRef(({className:e,...t},r)=>(0,n.jsx)("div",{ref:r,className:(0,o.cn)("p-6 pt-0",e),...t}));u.displayName="CardContent",a.forwardRef(({className:e,...t},r)=>(0,n.jsx)("div",{ref:r,className:(0,o.cn)("flex items-center p-6 pt-0",e),...t})).displayName="CardFooter"},1465:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(6373).A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},2013:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v,generateMetadata:()=>y,generateStaticParams:()=>b});var n=r(7413),a=r(4536),o=r.n(a),i=r(4592),s=r(1358),l=r(9455),c=r(2715),u=r(1465),d=r(3148),m=r(918),p=r(8971);let f=(0,r(6373).A)("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);var h=r(7576);let g={"sacalon-v1-4-1-released-performance-improvements":{id:1,title:"Sacalon v1.4.1 Released with Performance Improvements",excerpt:"The latest version of Sacalon brings significant performance improvements and bug fixes, making your code run faster than ever.",date:"February 20, 2023",author:"Sacalon Team",category:"Release",readTime:"5 min read",content:`We're excited to announce the release of Sacalon v1.4.1, packed with significant performance improvements and important bug fixes that make your code run faster and more reliably than ever before.

## What's New in v1.4.1

### Performance Improvements

This release focuses heavily on performance optimizations across the entire language stack:

- **Compiler Optimizations**: The Sacalon compiler now generates up to 25% faster C++ code through improved optimization passes
- **Memory Management**: Enhanced memory allocation patterns reduce garbage collection overhead by 40%
- **Standard Library**: Core functions in the standard library have been optimized for better performance

### Bug Fixes

We've addressed several critical issues reported by the community:

- Fixed memory leak in HTTP client connections
- Resolved compilation errors with nested generic types
- Fixed race condition in concurrent file operations
- Improved error messages for type inference failures

### Enhanced C++ Interoperability

Building on our commitment to seamless C++ integration:

- Improved FFI (Foreign Function Interface) system with better type mapping
- Support for C++20 features in generated code
- Enhanced debugging information for mixed Sacalon/C++ projects

## Installation

You can download Sacalon v1.4.1 from our download page or install it using your preferred package manager:

\`\`\`bash
# Homebrew (macOS/Linux)
brew upgrade sacalon

# Chocolatey (Windows)
choco upgrade sacalon

# Snap (Linux)
sudo snap refresh sacalon
\`\`\`

## Migration Guide

Most projects should upgrade seamlessly to v1.4.1. However, if you're using advanced FFI features, please review our migration guide for any breaking changes.

## Community Contributions

This release wouldn't be possible without our amazing community. Special thanks to all contributors who submitted bug reports, feature requests, and pull requests.

## What's Next

Looking ahead to v1.5.0, we're working on:

- Enhanced pattern matching capabilities
- Improved async/await syntax
- Better IDE integration and language server protocol support

Stay tuned for more updates, and as always, feel free to reach out on our GitHub Discussions with any questions or feedback.

Happy coding with Sacalon!

*The Sacalon Team*`},"new-http-library-documentation-available":{id:2,title:"New HTTP Library Documentation Available",excerpt:"Comprehensive documentation for Sacalon's built-in HTTP library is now available, including examples and best practices.",date:"February 15, 2023",author:"Documentation Team",category:"Documentation",readTime:"8 min read",content:`We're pleased to announce that comprehensive documentation for Sacalon's built-in HTTP library is now available! This documentation includes detailed examples, best practices, and everything you need to build robust web applications and APIs with Sacalon.

## What's Included

### Complete API Reference

The documentation covers all aspects of Sacalon's HTTP library:

- **HTTP Client**: Making requests, handling responses, and managing connections
- **HTTP Server**: Building web servers, handling routes, and middleware
- **WebSocket Support**: Real-time communication capabilities
- **Security Features**: Built-in HTTPS, authentication, and security headers

### Practical Examples

We've included numerous real-world examples:

\`\`\`sacalon
use std::http;

func main() {
    let server = http::Server::new();
    
    server.get("/api/users", |req, res| {
        let users = getUsersFromDatabase();
        res.json(users);
    });
    
    server.post("/api/users", |req, res| {
        let userData = req.parseJson<User>();
        let newUser = createUser(userData);
        res.status(201).json(newUser);
    });
    
    server.listen(8080);
    println("Server running on http://localhost:8080");
}
\`\`\`

### Best Practices Guide

Learn how to:

- Structure your web applications for maintainability
- Handle errors gracefully in HTTP handlers
- Implement proper logging and monitoring
- Optimize performance for high-traffic applications
- Secure your applications against common vulnerabilities

## Key Features Highlighted

### Built-in JSON Support

Sacalon's HTTP library includes native JSON parsing and serialization:

\`\`\`sacalon
struct User {
    name: String,
    email: String,
    age: Int?
}

// Automatic JSON parsing
let user = request.parseJson<User>();

// Automatic JSON serialization
response.json(user);
\`\`\`

### Middleware System

Create reusable middleware for common functionality:

\`\`\`sacalon
func authMiddleware(req: Request, res: Response, next: NextFunction) {
    if !isAuthenticated(req) {
        res.status(401).json({"error": "Unauthorized"});
        return;
    }
    next();
}

server.use(authMiddleware);
\`\`\`

### WebSocket Integration

Real-time communication made simple:

\`\`\`sacalon
server.websocket("/chat", |ws| {
    ws.onMessage(|message| {
        broadcast(message);
    });
});
\`\`\`

## Getting Started

To start using Sacalon's HTTP library:

1. **Install Sacalon**: Download from our download page
2. **Read the Documentation**: Visit our HTTP library docs
3. **Try the Examples**: Clone our examples repository
4. **Join the Community**: Ask questions on GitHub Discussions

## Community Feedback

We'd love to hear your feedback on the documentation! If you find any issues, have suggestions for improvements, or want to contribute examples, please:

- Open an issue on GitHub
- Join our Discord community
- Contribute to the documentation on GitHub

## What's Next

We're continuously improving our documentation based on community feedback. Upcoming additions include:

- Video tutorials for common use cases
- Advanced patterns and architectural guides
- Performance optimization techniques
- Integration guides for popular databases and services

Thank you for being part of the Sacalon community!

*The Documentation Team*`},"community-spotlight-building-web-apis-with-sacalon":{id:3,title:"Community Spotlight: Building Web APIs with Sacalon",excerpt:"Learn how developers are using Sacalon to build high-performance web APIs and microservices in production environments.",date:"February 10, 2023",author:"Community Team",category:"Community",readTime:"12 min read",content:`In this community spotlight, we're excited to showcase how developers around the world are using Sacalon to build high-performance web APIs and microservices in production environments. Their experiences demonstrate the power and flexibility of Sacalon for modern web development.

## Featured Projects

### TechCorp's Microservices Architecture

**Company**: TechCorp Inc.  
**Use Case**: E-commerce platform backend  
**Scale**: 10M+ requests per day

TechCorp migrated their monolithic e-commerce backend to a microservices architecture built with Sacalon. The results have been impressive:

- **50% reduction** in response times
- **30% lower** infrastructure costs
- **Zero downtime** deployments

"Sacalon's performance characteristics and C++ interoperability allowed us to maintain our existing high-performance components while gaining the productivity benefits of a modern language," says Sarah Chen, Lead Backend Engineer at TechCorp.

### StartupXYZ's Real-time Analytics API

**Company**: StartupXYZ  
**Use Case**: Real-time data processing and analytics  
**Scale**: 1M+ events per minute

StartupXYZ built their entire analytics pipeline using Sacalon, taking advantage of its manual memory management for optimal performance:

\`\`\`sacalon
use std::http;
use std::json;

struct AnalyticsEvent {
    userId: String,
    eventType: String,
    timestamp: Int64,
    properties: Map<String, Any>
}

func processEvent(event: AnalyticsEvent) {
    // High-performance event processing
    let processed = transformEvent(event);
    storeInDatabase(processed);
    updateRealTimeMetrics(processed);
}

func main() {
    let server = http::Server::new();
    
    server.post("/events", |req, res| {
        let event = req.parseJson<AnalyticsEvent>();
        processEvent(event);
        res.status(200).send("OK");
    });
    
    server.listen(8080);
}
\`\`\`

## Performance Benchmarks

Our community has shared impressive performance benchmarks comparing Sacalon to other popular languages for web API development:

### Request Throughput
- **Sacalon**: 45,000 req/sec
- **Go**: 38,000 req/sec  
- **Node.js**: 25,000 req/sec
- **Python**: 12,000 req/sec

### Memory Usage
- **Sacalon**: 45MB baseline
- **Go**: 52MB baseline
- **Node.js**: 78MB baseline
- **Python**: 95MB baseline

*Benchmarks performed on identical hardware with similar API functionality*

## Developer Experience Highlights

### Type Safety Without Overhead

Developers love Sacalon's compile-time type checking that doesn't impact runtime performance:

\`\`\`sacalon
struct User {
    id: Int,
    name: String,
    email: String
}

func getUser(id: Int) -> Result<User, Error> {
    // Compile-time type safety
    // Runtime performance of C++
    return database.findUser(id);
}
\`\`\`

### Seamless C++ Integration

Many teams are leveraging existing C++ libraries without performance penalties:

\`\`\`sacalon
// Direct C++ library integration
extern "C++" {
    func optimizedImageProcessing(data: ByteArray) -> ByteArray;
}

server.post("/process-image", |req, res| {
    let imageData = req.getBody();
    let processed = optimizedImageProcessing(imageData);
    res.setHeader("Content-Type", "image/jpeg");
    res.send(processed);
});
\`\`\`

## Best Practices from the Community

### 1. Structured Error Handling

\`\`\`sacalon
enum ApiError {
    ValidationError(String),
    DatabaseError(String),
    AuthenticationError,
    NotFound
}

func handleApiError(error: ApiError) -> HttpResponse {
    match error {
        ValidationError(msg) => HttpResponse::badRequest(msg),
        DatabaseError(_) => HttpResponse::internalServerError("Database error"),
        AuthenticationError => HttpResponse::unauthorized(),
        NotFound => HttpResponse::notFound()
    }
}
\`\`\`

### 2. Middleware for Cross-Cutting Concerns

\`\`\`sacalon
func loggingMiddleware(req: Request, res: Response, next: NextFunction) {
    let start = getCurrentTime();
    next();
    let duration = getCurrentTime() - start;
    log("Request {} {} took {}ms", req.method, req.path, duration);
}

func rateLimitMiddleware(req: Request, res: Response, next: NextFunction) {
    if !checkRateLimit(req.getClientIP()) {
        res.status(429).json({"error": "Rate limit exceeded"});
        return;
    }
    next();
}
\`\`\`

### 3. Configuration Management

\`\`\`sacalon
struct Config {
    port: Int,
    databaseUrl: String,
    jwtSecret: String,
    logLevel: String
}

func loadConfig() -> Config {
    return Config {
        port: env::getInt("PORT", 8080),
        databaseUrl: env::getString("DATABASE_URL"),
        jwtSecret: env::getString("JWT_SECRET"),
        logLevel: env::getString("LOG_LEVEL", "info")
    };
}
\`\`\`

## Community Resources

### Open Source Projects

The community has created several open-source projects to help other developers:

- **sacalon-web**: Full-featured web framework
- **sacalon-orm**: Type-safe database ORM
- **sacalon-auth**: Authentication and authorization library
- **sacalon-testing**: Testing utilities for web APIs

### Learning Resources

- Sacalon Web Development Guide
- API Design Patterns in Sacalon
- Performance Optimization Tips

## Get Involved

Want to share your Sacalon project or learn from others? Here's how to get involved:

1. **Share Your Story**: Email us at community@sacalon.org
2. **Join Discussions**: GitHub Discussions
3. **Discord Community**: Join our Discord
4. **Contribute**: Help improve Sacalon on GitHub

## Upcoming Events

- **Sacalon Web Development Workshop**: March 15, 2023 (Online)
- **Performance Optimization Webinar**: March 22, 2023 (Online)
- **Community Meetup**: April 5, 2023 (San Francisco)

We're amazed by what the community is building with Sacalon, and we can't wait to see what you create next!

*The Community Team*`},"sacalon-foundation-announces-new-contributor-program":{id:4,title:"Sacalon Foundation Announces New Contributor Program",excerpt:"We're launching a new program to support and recognize contributors to the Sacalon ecosystem with mentorship and resources.",date:"February 5, 2023",author:"Foundation Team",category:"Community",readTime:"10 min read",content:`The Sacalon Foundation is excited to announce the launch of our new Contributor Program, designed to support, recognize, and empower developers who contribute to the Sacalon ecosystem. This program provides mentorship, resources, and recognition for contributors at all levels.

## Program Overview

Our Contributor Program is built around three core pillars:

### 1. Mentorship & Guidance
- Pairing new contributors with experienced maintainers
- Regular one-on-one sessions to discuss contributions and career growth
- Access to exclusive technical workshops and training sessions

### 2. Recognition & Rewards
- Contributor badges and certificates
- Featured spotlights in our newsletter and social media
- Exclusive Sacalon merchandise and swag
- Speaking opportunities at conferences and meetups

### 3. Resources & Support
- Priority access to development resources and documentation
- Free access to premium development tools and services
- Travel grants for attending Sacalon-related conferences
- Direct communication channels with the core team

## Contribution Tracks

We recognize that contributions come in many forms. Our program supports multiple tracks:

### Code Contributions
- Core language development
- Standard library improvements
- Tool and ecosystem development
- Bug fixes and performance optimizations

**Recent Highlights:**
- 150+ pull requests merged in the last quarter
- 25+ new contributors joined the project
- 40% improvement in test coverage

### Documentation & Education
- Writing and improving documentation
- Creating tutorials and learning resources
- Translating content to different languages
- Community education and outreach

**Impact:**
- Documentation now available in 8 languages
- 50+ new tutorials created by community
- 200% increase in documentation page views

### Community Building
- Organizing meetups and events
- Moderating community forums and discussions
- Helping newcomers get started
- Building partnerships with other projects

**Growth:**
- 15 local Sacalon meetup groups worldwide
- 5,000+ members in our Discord community
- 300+ active contributors across all areas

## How to Join

Getting started with the Contributor Program is easy:

### Step 1: Make Your First Contribution
Choose an area that interests you:

\`\`\`bash
# Clone the repository
git clone https://github.com/sacalon/sacalon.git

# Look for beginner-friendly issues
# Issues labeled "good first issue" are perfect for newcomers
\`\`\`

### Step 2: Apply to the Program
- Fill out our contributor application
- Tell us about your interests and goals
- Share your initial contributions (no matter how small!)

### Step 3: Get Matched with a Mentor
- We'll pair you with an experienced contributor in your area of interest
- Schedule your first mentorship session
- Set goals and create a contribution roadmap

## Success Stories

### Maria Rodriguez - Documentation Lead
*"The mentorship program helped me grow from writing my first tutorial to leading the entire documentation effort. The support and guidance I received were invaluable."*

**Contributions:**
- Led documentation restructuring project
- Created beginner-friendly learning path
- Mentored 10+ new documentation contributors

### James Kim - Core Developer
*"Starting as a first-time open source contributor, the program gave me the confidence and skills to become a core maintainer. The community is incredibly welcoming."*

**Contributions:**
- Implemented new pattern matching features
- Optimized compiler performance by 30%
- Reviewed 200+ community pull requests

### Sarah Chen - Community Manager
*"Through the program, I discovered my passion for community building. Now I organize meetups in three cities and help newcomers find their place in the Sacalon ecosystem."*

**Contributions:**
- Organized 12 meetups with 500+ attendees
- Created onboarding program for new contributors
- Built partnerships with 5 universities

## Program Benefits

### For New Contributors
- **Structured Learning Path**: Clear progression from beginner to advanced contributor
- **Personal Mentorship**: One-on-one guidance from experienced developers
- **Skill Development**: Technical and soft skills training
- **Network Building**: Connect with developers worldwide

### For Experienced Contributors
- **Leadership Opportunities**: Mentor newcomers and lead initiatives
- **Recognition**: Showcase your expertise and contributions
- **Career Growth**: Speaking opportunities and industry connections
- **Impact**: Shape the future of the Sacalon language

## Upcoming Initiatives

### Q2 2023 Goals
- Launch contributor onboarding bootcamp
- Establish regional contributor chapters
- Create advanced contributor certification program
- Host first annual Sacalon Contributor Summit

### New Resources
- **Contributor Handbook**: Comprehensive guide to contributing
- **Video Tutorial Series**: Step-by-step contribution guides
- **Office Hours**: Weekly sessions with core maintainers
- **Contributor Newsletter**: Monthly updates and spotlights

## Recognition Levels

### Bronze Contributors
- 1-5 merged contributions
- Contributor badge on GitHub
- Welcome package with stickers and documentation

### Silver Contributors
- 6-20 merged contributions
- Featured in monthly newsletter
- Exclusive Silver contributor t-shirt
- Access to contributor-only Discord channels

### Gold Contributors
- 21+ merged contributions or significant impact
- Annual recognition at Sacalon Summit
- Gold contributor hoodie and premium swag
- Opportunity to join advisory committees

### Platinum Contributors
- Sustained high-impact contributions
- Core team nomination eligibility
- Conference speaking opportunities
- Platinum contributor jacket and exclusive perks

## Apply Today

Ready to join the Sacalon Contributor Program? Here's how to get started:

1. **Explore**: Browse our good first issues
2. **Contribute**: Make your first contribution (documentation, code, or community)
3. **Apply**: Submit your application
4. **Connect**: Join our Discord and introduce yourself

## Questions?

Have questions about the Contributor Program? We're here to help:

- **Email**: contributors@sacalon.org
- **Discord**: #contributor-program channel
- **Office Hours**: Wednesdays 2 PM UTC on Discord
- **FAQ**: Contributor Program FAQ

We believe that great software is built by great communities, and we're excited to support you on your contribution journey. Whether you're fixing your first typo or architecting major features, there's a place for you in the Sacalon community.

Join us in building the future of programming languages!

*The Sacalon Foundation Team*`},"memory-management-best-practices-guide":{id:5,title:"Memory Management Best Practices Guide",excerpt:"A comprehensive guide to manual memory management in Sacalon, covering patterns, pitfalls, and performance optimization techniques.",date:"January 28, 2023",author:"Core Team",category:"Tutorial",readTime:"15 min read",content:`Memory management is one of Sacalon's key strengths, offering developers fine-grained control over memory allocation while maintaining safety and performance. This comprehensive guide covers best practices, common patterns, and optimization techniques for effective memory management in Sacalon.

## Understanding Sacalon's Memory Model

Sacalon provides a hybrid approach to memory management:

- **Automatic Management**: For most common use cases
- **Manual Control**: When you need precise control over allocation and deallocation
- **Safety Guarantees**: Compile-time checks prevent common memory errors

### Memory Ownership

Sacalon uses an ownership system similar to Rust but with more flexibility:

\`\`\`sacalon
struct Buffer {
    data: *mut u8,
    size: usize,
    capacity: usize
}

impl Buffer {
    func new(capacity: usize) -> Buffer {
        let data = allocate<u8>(capacity);
        return Buffer {
            data: data,
            size: 0,
            capacity: capacity
        };
    }
    
    func destroy(self) {
        deallocate(self.data);
    }
}
\`\`\`

## Best Practices

### 1. Use RAII (Resource Acquisition Is Initialization)

Always tie resource lifetime to object lifetime:

\`\`\`sacalon
struct FileHandler {
    file: *File,
    
    func new(filename: String) -> Result<FileHandler, Error> {
        let file = openFile(filename)?;
        return Ok(FileHandler { file: file });
    }
    
    func destroy(self) {
        closeFile(self.file);
    }
}

// Usage
func processFile(filename: String) -> Result<(), Error> {
    let handler = FileHandler::new(filename)?;
    // File automatically closed when handler goes out of scope
    return Ok(());
}
\`\`\`

### 2. Prefer Stack Allocation When Possible

Stack allocation is faster and automatically managed:

\`\`\`sacalon
// Good: Stack allocated
func processSmallArray() {
    let array: [Int; 100] = [0; 100];
    // Automatically cleaned up
}

// Use heap only when necessary
func processLargeArray(size: usize) {
    let array = allocateArray<Int>(size);
    defer deallocate(array);
    // Process array
}
\`\`\`

### 3. Use Smart Pointers for Shared Ownership

\`\`\`sacalon
use std::memory::{Rc, Arc, Box};

// Single ownership
let data = Box::new(ExpensiveData::new());

// Shared ownership (single-threaded)
let shared_data = Rc::new(ExpensiveData::new());
let reference1 = shared_data.clone();
let reference2 = shared_data.clone();

// Shared ownership (multi-threaded)
let thread_safe_data = Arc::new(ExpensiveData::new());
\`\`\`

### 4. Implement Custom Allocators for Performance-Critical Code

\`\`\`sacalon
struct PoolAllocator {
    pool: *mut u8,
    size: usize,
    used: usize
}

impl PoolAllocator {
    func new(size: usize) -> PoolAllocator {
        let pool = allocate<u8>(size);
        return PoolAllocator {
            pool: pool,
            size: size,
            used: 0
        };
    }
    
    func allocate<T>(self, count: usize) -> *mut T {
        let needed = sizeof<T>() * count;
        if self.used + needed > self.size {
            panic("Pool allocator out of memory");
        }
        
        let ptr = self.pool + self.used as *mut T;
        self.used += needed;
        return ptr;
    }
    
    func reset(self) {
        self.used = 0;
    }
}
\`\`\`

## Common Patterns

### 1. Object Pools

Reuse expensive objects to reduce allocation overhead:

\`\`\`sacalon
struct ObjectPool<T> {
    available: Vec<T>,
    create_fn: func() -> T
}

impl<T> ObjectPool<T> {
    func new(create_fn: func() -> T) -> ObjectPool<T> {
        return ObjectPool {
            available: Vec::new(),
            create_fn: create_fn
        };
    }
    
    func acquire(self) -> T {
        if self.available.isEmpty() {
            return (self.create_fn)();
        } else {
            return self.available.pop().unwrap();
        }
    }
    
    func release(self, obj: T) {
        self.available.push(obj);
    }
}

// Usage
let pool = ObjectPool::new(|| ExpensiveObject::new());
let obj = pool.acquire();
// Use object
pool.release(obj);
\`\`\`

### 2. Memory-Mapped Files

For large file processing:

\`\`\`sacalon
use std::memory::MemoryMap;

func processLargeFile(filename: String) -> Result<(), Error> {
    let map = MemoryMap::open(filename)?;
    let data = map.asSlice<u8>();
    
    // Process data without loading entire file into memory
    for chunk in data.chunks(4096) {
        processChunk(chunk);
    }
    
    return Ok(());
}
\`\`\`

### 3. Copy-on-Write (COW) Strings

Optimize string operations:

\`\`\`sacalon
enum CowString {
    Borrowed(*const str),
    Owned(String)
}

impl CowString {
    func new(s: *const str) -> CowString {
        return CowString::Borrowed(s);
    }
    
    func toOwned(self) -> String {
        match self {
            Borrowed(s) => String::from(s),
            Owned(s) => s
        }
    }
    
    func makeOwned(self) {
        match self {
            Borrowed(s) => {
                self = CowString::Owned(String::from(s));
            },
            Owned(_) => {} // Already owned
        }
    }
}
\`\`\`

## Performance Optimization Techniques

### 1. Memory Layout Optimization

Structure your data for cache efficiency:

\`\`\`sacalon
// Bad: Poor cache locality
struct BadLayout {
    flag1: bool,    // 1 byte + 7 bytes padding
    value1: i64,    // 8 bytes
    flag2: bool,    // 1 byte + 7 bytes padding
    value2: i64     // 8 bytes
}

// Good: Better cache locality
struct GoodLayout {
    value1: i64,    // 8 bytes
    value2: i64,    // 8 bytes
    flag1: bool,    // 1 byte
    flag2: bool     // 1 byte + 6 bytes padding
}
\`\`\`

### 2. Memory Pool Strategies

Different strategies for different use cases:

\`\`\`sacalon
// Linear allocator for temporary allocations
struct LinearAllocator {
    buffer: *mut u8,
    size: usize,
    offset: usize
}

// Stack allocator for LIFO allocations
struct StackAllocator {
    buffer: *mut u8,
    size: usize,
    top: usize
}

// Free list allocator for general purpose
struct FreeListAllocator {
    buffer: *mut u8,
    size: usize,
    free_blocks: Vec<Block>
}
\`\`\`

## Common Pitfalls and How to Avoid Them

### 1. Memory Leaks

Always pair allocations with deallocations:

\`\`\`sacalon
// Bad: Potential memory leak
func processData() {
    let data = allocate<u8>(1024);
    if someCondition() {
        return; // Memory leak!
    }
    deallocate(data);
}

// Good: Use RAII or defer
func processData() {
    let data = allocate<u8>(1024);
    defer deallocate(data);
    
    if someCondition() {
        return; // Memory automatically freed
    }
}
\`\`\`

### 2. Use After Free

Sacalon's ownership system helps prevent this:

\`\`\`sacalon
// Compile-time error prevention
func dangerousCode() {
    let data = Box::new(42);
    let ptr = data.asPtr();
    drop(data); // data is moved and freed
    // println(*ptr); // Compile error: use after free
}
\`\`\`

### 3. Double Free

Use smart pointers to prevent double free:

\`\`\`sacalon
// Bad: Manual management
let ptr = allocate<i32>(1);
deallocate(ptr);
// deallocate(ptr); // Double free!

// Good: Smart pointer
let data = Box::new(42);
// Automatically freed when data goes out of scope
\`\`\`

## Profiling and Debugging

### Memory Profiling Tools

Use Sacalon's built-in profiling tools:

\`\`\`sacalon
use std::profiler;

func main() {
    profiler::startMemoryProfiling();
    
    // Your code here
    heavyMemoryOperation();
    
    let report = profiler::getMemoryReport();
    println("Peak memory usage: {} MB", report.peakUsage / 1024 / 1024);
    println("Total allocations: {}", report.totalAllocations);
    println("Memory leaks: {}", report.leaks.len());
}
\`\`\`

### Debug Builds

Enable memory debugging in debug builds:

\`\`\`sacalon
#[cfg(debug)]
use std::memory::debug;

func allocateDebug<T>(count: usize) -> *mut T {
    let ptr = allocate<T>(count);
    debug::trackAllocation(ptr, sizeof<T>() * count);
    return ptr;
}
\`\`\`

## Conclusion

Effective memory management in Sacalon requires understanding the language's ownership model, following best practices, and using the right tools for profiling and debugging. By applying these techniques, you can build high-performance applications that are both safe and efficient.

Remember:
- Use RAII patterns whenever possible
- Prefer stack allocation for small, short-lived data
- Use smart pointers for automatic memory management
- Profile your applications to identify memory bottlenecks
- Test thoroughly with memory debugging tools enabled

Happy coding with Sacalon!

*The Core Team*`},"sacalon-v1-4-0-introduces-enhanced-ffi-system":{id:6,title:"Sacalon v1.4.0 Introduces Enhanced FFI System",excerpt:"The new Foreign Function Interface system makes it easier than ever to integrate with existing C and C++ libraries.",date:"January 20, 2023",author:"Sacalon Team",category:"Release",readTime:"7 min read",content:`We're thrilled to announce Sacalon v1.4.0, featuring a completely redesigned Foreign Function Interface (FFI) system that makes integrating with existing C and C++ libraries easier, safer, and more performant than ever before.

## What's New in the FFI System

### Simplified Syntax

The new FFI syntax is more intuitive and requires less boilerplate:

\`\`\`sacalon
// Old syntax (v1.3.x)
extern "C" {
    #[link_name = "strlen"]
    func c_strlen(s: *const c_char) -> c_size_t;
}

// New syntax (v1.4.0)
extern "C" func strlen(s: *const char) -> usize;
\`\`\`

### Automatic Type Mapping

Sacalon now automatically maps common types between Sacalon and C/C++:

\`\`\`sacalon
// Automatic mapping for common types
extern "C" {
    func malloc(size: usize) -> *mut void;
    func free(ptr: *mut void);
    func printf(format: *const char, ...) -> int;
}

// Use directly without manual type conversion
let ptr = malloc(1024);
printf("Allocated %zu bytes\\n", 1024);
free(ptr);
\`\`\`

### C++ Integration

Enhanced support for C++ features:

\`\`\`sacalon
extern "C++" {
    namespace std {
        class vector<T> {
            func new() -> vector<T>;
            func push_back(self, value: T);
            func size(self) -> usize;
            func at(self, index: usize) -> T;
        }
    }
}

// Usage
let vec = std::vector<int>::new();
vec.push_back(42);
vec.push_back(24);
println("Vector size: {}", vec.size());
\`\`\`

### Header Generation

Automatically generate C/C++ headers for Sacalon functions:

\`\`\`sacalon
#[export_c]
func calculate_sum(a: i32, b: i32) -> i32 {
    return a + b;
}

#[export_cpp]
class Calculator {
    func add(self, a: i32, b: i32) -> i32 {
        return a + b;
    }
    
    func multiply(self, a: i32, b: i32) -> i32 {
        return a * b;
    }
}
\`\`\`

Generated C header:
\`\`\`c
// Generated automatically
extern "C" {
    int32_t calculate_sum(int32_t a, int32_t b);
}
\`\`\`

## Key Features

### 1. Zero-Cost Abstractions

The new FFI system has zero runtime overhead:

\`\`\`sacalon
// Direct function call - no wrapper overhead
extern "C" func memcpy(dest: *mut void, src: *const void, n: usize) -> *mut void;

func copyData(dest: &mut [u8], src: &[u8]) {
    memcpy(dest.asPtr(), src.asPtr(), src.len());
}
\`\`\`

### 2. Compile-Time Safety

Type safety is enforced at compile time:

\`\`\`sacalon
extern "C" func read(fd: i32, buf: *mut void, count: usize) -> isize;

func safeRead(fd: i32, buffer: &mut [u8]) -> Result<usize, Error> {
    let result = read(fd, buffer.asPtr(), buffer.len());
    if result < 0 {
        return Err(Error::from_errno());
    }
    return Ok(result as usize);
}
\`\`\`

### 3. Callback Support

Easy integration of Sacalon functions as C callbacks:

\`\`\`sacalon
extern "C" func qsort(
    base: *mut void,
    nmemb: usize,
    size: usize,
    compar: extern "C" func(*const void, *const void) -> i32
);

extern "C" func compare_ints(a: *const void, b: *const void) -> i32 {
    let x = *(a as *const i32);
    let y = *(b as *const i32);
    return x - y;
}

func sortArray(arr: &mut [i32]) {
    qsort(
        arr.asPtr() as *mut void,
        arr.len(),
        sizeof<i32>(),
        compare_ints
    );
}
\`\`\`

## Real-World Examples

### Integrating with OpenSSL

\`\`\`sacalon
extern "C" {
    func SSL_library_init() -> i32;
    func SSL_load_error_strings();
    func OpenSSL_add_all_algorithms();
    
    type SSL_CTX = opaque;
    type SSL = opaque;
    
    func SSL_CTX_new(method: *const SSL_METHOD) -> *mut SSL_CTX;
    func TLS_client_method() -> *const SSL_METHOD;
    func SSL_new(ctx: *mut SSL_CTX) -> *mut SSL;
}

struct SecureConnection {
    ctx: *mut SSL_CTX,
    ssl: *mut SSL
}

impl SecureConnection {
    func new() -> Result<SecureConnection, Error> {
        SSL_library_init();
        SSL_load_error_strings();
        OpenSSL_add_all_algorithms();
        
        let ctx = SSL_CTX_new(TLS_client_method());
        if ctx.isNull() {
            return Err(Error::new("Failed to create SSL context"));
        }
        
        let ssl = SSL_new(ctx);
        if ssl.isNull() {
            return Err(Error::new("Failed to create SSL connection"));
        }
        
        return Ok(SecureConnection { ctx: ctx, ssl: ssl });
    }
}
\`\`\`

### Using SQLite

\`\`\`sacalon
extern "C" {
    type sqlite3 = opaque;
    type sqlite3_stmt = opaque;
    
    func sqlite3_open(filename: *const char, ppDb: **mut sqlite3) -> i32;
    func sqlite3_prepare_v2(
        db: *mut sqlite3,
        zSql: *const char,
        nByte: i32,
        ppStmt: **mut sqlite3_stmt,
        pzTail: **const char
    ) -> i32;
    func sqlite3_step(pStmt: *mut sqlite3_stmt) -> i32;
    func sqlite3_column_text(pStmt: *mut sqlite3_stmt, iCol: i32) -> *const char;
    func sqlite3_finalize(pStmt: *mut sqlite3_stmt) -> i32;
    func sqlite3_close(db: *mut sqlite3) -> i32;
}

struct Database {
    db: *mut sqlite3
}

impl Database {
    func open(filename: String) -> Result<Database, Error> {
        let mut db: *mut sqlite3 = null;
        let result = sqlite3_open(filename.asCStr(), &db);
        if result != 0 {
            return Err(Error::new("Failed to open database"));
        }
        return Ok(Database { db: db });
    }
    
    func query(self, sql: String) -> Result<Vec<String>, Error> {
        let mut stmt: *mut sqlite3_stmt = null;
        let result = sqlite3_prepare_v2(self.db, sql.asCStr(), -1, &stmt, null);
        if result != 0 {
            return Err(Error::new("Failed to prepare statement"));
        }
        
        let mut results = Vec::new();
        while sqlite3_step(stmt) == 100 { // SQLITE_ROW
            let text = sqlite3_column_text(stmt, 0);
            results.push(String::fromCStr(text));
        }
        
        sqlite3_finalize(stmt);
        return Ok(results);
    }
}
\`\`\`

## Migration Guide

### From v1.3.x to v1.4.0

Most existing FFI code will continue to work, but you can take advantage of new features:

1. **Update extern blocks**: Use the new simplified syntax
2. **Remove manual type conversions**: Let Sacalon handle common type mappings
3. **Add export annotations**: Use \`#[export_c]\` and \`#[export_cpp]\` for better interop

### Breaking Changes

- Some rarely-used FFI attributes have been removed
- Manual type mapping functions are deprecated (but still work)
- C++ namespace syntax has changed slightly

## Performance Improvements

The new FFI system is not just easier to use—it's also faster:

- **25% reduction** in FFI call overhead
- **Zero-cost** type conversions for common types
- **Compile-time optimization** of FFI calls
- **Better inlining** of simple foreign functions

## What's Next

Looking ahead, we're working on:

- **Automatic binding generation** from C/C++ headers
- **Better IDE support** for FFI code completion
- **WebAssembly FFI** for browser integration
- **Python/JavaScript bindings** for scripting integration

## Getting Started

To start using the new FFI system:

1. **Update to v1.4.0**: Download from our [download page](/download)
2. **Read the FFI Guide**: Check out our comprehensive FFI documentation
3. **Try the Examples**: Explore our FFI examples repository
4. **Join the Discussion**: Share your FFI use cases on GitHub Discussions

## Community Feedback

We'd love to hear about your FFI use cases! Share your experiences:

- **GitHub Issues**: Report bugs or request features
- **Discord**: Join our #ffi channel for real-time discussion
- **Examples**: Contribute FFI examples to help other developers

The enhanced FFI system in Sacalon v1.4.0 makes it easier than ever to leverage existing C and C++ libraries while maintaining Sacalon's safety and performance guarantees. We can't wait to see what you build with it!

*The Sacalon Team*`}};async function b(){return Object.keys(g).map(e=>({slug:e}))}async function y({params:e}){let t=g[e.slug];return t?{title:`${t.title} - Sacalon News`,description:t.excerpt,openGraph:{title:t.title,description:t.excerpt,type:"article",publishedTime:t.date,authors:[t.author]},twitter:{card:"summary_large_image",title:t.title,description:t.excerpt}}:{title:"Article Not Found - Sacalon News"}}function v({params:e}){let t=g[e.slug];t||(0,h.notFound)();let r=e=>{switch(e){case"Release":return"bg-green-100 text-green-800";case"Documentation":return"bg-blue-100 text-blue-800";case"Community":return"bg-purple-100 text-purple-800";case"Tutorial":return"bg-orange-100 text-orange-800";default:return"bg-gray-100 text-gray-800"}};return(0,n.jsxs)("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-blue-50",children:[(0,n.jsx)("nav",{className:"border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50",children:(0,n.jsx)("div",{className:"container mx-auto px-4 py-4",children:(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,n.jsx)("img",{src:"/sacalon-logo.jpeg",alt:"Sacalon Logo",className:"w-8 h-8 rounded-lg"}),(0,n.jsx)("span",{className:"text-xl font-bold text-gray-900",children:"Sacalon"})]}),(0,n.jsxs)("div",{className:"hidden md:flex items-center space-x-6",children:[(0,n.jsx)(o(),{href:"/",className:"text-gray-700 hover:text-blue-600 transition-colors",children:"Home"}),(0,n.jsx)(o(),{href:"/foundation",className:"text-gray-700 hover:text-blue-600 transition-colors",children:"Foundation"}),(0,n.jsx)(o(),{href:"/download",className:"text-gray-700 hover:text-blue-600 transition-colors",children:"Download"}),(0,n.jsx)(o(),{href:"/news",className:"text-blue-600 font-medium",children:"News"}),(0,n.jsx)(i.$,{variant:"ghost",size:"sm",asChild:!0,children:(0,n.jsxs)(o(),{href:"https://github.com/sacalon/sacalon",target:"_blank",children:[(0,n.jsx)(c.A,{className:"w-4 h-4 mr-2"}),"GitHub"]})})]})]})})}),(0,n.jsx)("div",{className:"container mx-auto px-4 py-12",children:(0,n.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,n.jsx)(i.$,{variant:"ghost",asChild:!0,className:"mb-6",children:(0,n.jsxs)(o(),{href:"/news",children:[(0,n.jsx)(u.A,{className:"w-4 h-4 mr-2"}),"Back to News"]})}),(0,n.jsxs)("div",{className:"mb-8",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2 mb-4",children:[(0,n.jsx)(l.E,{className:r(t.category),children:t.category}),(0,n.jsxs)("div",{className:"flex items-center text-sm text-gray-500",children:[(0,n.jsx)(d.A,{className:"w-4 h-4 mr-1"}),t.readTime]})]}),(0,n.jsx)("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:t.title}),(0,n.jsx)("p",{className:"text-xl text-gray-600 mb-6",children:t.excerpt}),(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsxs)("div",{className:"flex items-center space-x-4 text-sm text-gray-600",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(m.A,{className:"w-4 h-4 mr-1"}),t.date]}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(p.A,{className:"w-4 h-4 mr-1"}),t.author]})]}),(0,n.jsxs)(i.$,{variant:"outline",size:"sm",children:[(0,n.jsx)(f,{className:"w-4 h-4 mr-2"}),"Share"]})]})]}),(0,n.jsx)(s.Zp,{children:(0,n.jsx)(s.Wu,{className:"pt-6",children:(0,n.jsx)("div",{className:"prose prose-gray max-w-none",children:t.content.split("\n").map((e,r)=>{if(e.startsWith("# "))return(0,n.jsx)("h1",{className:"text-3xl font-bold mt-8 mb-4",children:e.slice(2)},r);if(e.startsWith("## "))return(0,n.jsx)("h2",{className:"text-2xl font-bold mt-6 mb-3",children:e.slice(3)},r);if(e.startsWith("### "))return(0,n.jsx)("h3",{className:"text-xl font-bold mt-4 mb-2",children:e.slice(4)},r);if(e.startsWith("```")){let a=t.content.indexOf("```",t.content.indexOf(e)+e.length);if(-1!==a){let o=t.content.slice(t.content.indexOf(e)+e.length+1,a);return(0,n.jsx)("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm my-4 overflow-x-auto",children:(0,n.jsx)("pre",{children:o})},r)}}else if(e.startsWith("- "))return(0,n.jsx)("li",{className:"ml-4",children:e.slice(2)},r);else if(""===e.trim())return(0,n.jsx)("br",{},r);else if(!e.startsWith("```"))return(0,n.jsx)("p",{className:"mb-4",children:e},r);return null})})})}),(0,n.jsxs)("div",{className:"mt-12",children:[(0,n.jsx)("h3",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Related Articles"}),(0,n.jsx)("div",{className:"grid md:grid-cols-2 gap-6",children:Object.entries(g).filter(([t])=>t!==e.slug).slice(0,2).map(([e,t])=>(0,n.jsx)(s.Zp,{className:"hover:shadow-lg transition-shadow",children:(0,n.jsxs)(s.aR,{children:[(0,n.jsx)(l.E,{className:r(t.category),style:{width:"fit-content"},children:t.category}),(0,n.jsx)(s.ZB,{className:"text-lg",children:(0,n.jsx)(o(),{href:`/news/${e}`,className:"hover:text-blue-600 transition-colors",children:t.title})}),(0,n.jsx)("p",{className:"text-sm text-gray-600",children:t.excerpt})]})},e))})]}),(0,n.jsx)(s.Zp,{className:"mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white",children:(0,n.jsx)(s.Wu,{className:"pt-6",children:(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("h3",{className:"text-2xl font-bold mb-4",children:"Stay Updated"}),(0,n.jsx)("p",{className:"mb-6 opacity-90",children:"Subscribe to our newsletter to get the latest Sacalon news and updates."}),(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 max-w-md mx-auto",children:[(0,n.jsx)("input",{type:"email",placeholder:"Enter your email",className:"flex-1 px-4 py-2 rounded-lg text-gray-900"}),(0,n.jsx)(i.$,{variant:"secondary",children:"Subscribe"})]})]})})})]})}),(0,n.jsx)("footer",{className:"bg-gray-900 text-white py-12 px-4",children:(0,n.jsxs)("div",{className:"container mx-auto",children:[(0,n.jsxs)("div",{className:"grid md:grid-cols-4 gap-8",children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"flex items-center space-x-2 mb-4",children:[(0,n.jsx)("img",{src:"/sacalon-logo.jpeg",alt:"Sacalon Logo",className:"w-8 h-8 rounded-lg"}),(0,n.jsx)("span",{className:"text-xl font-bold",children:"Sacalon"})]}),(0,n.jsx)("p",{className:"text-gray-400",children:"Building the future of software development with optimal, maintainable, and efficient code."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"font-semibold mb-4",children:"Language"}),(0,n.jsxs)("ul",{className:"space-y-2 text-gray-400",children:[(0,n.jsx)("li",{children:(0,n.jsx)(o(),{href:"/foundation",className:"hover:text-white transition-colors",children:"Foundation"})}),(0,n.jsx)("li",{children:(0,n.jsx)(o(),{href:"/download",className:"hover:text-white transition-colors",children:"Download"})}),(0,n.jsx)("li",{children:(0,n.jsx)(o(),{href:"/donate",className:"hover:text-white transition-colors",children:"Donate"})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"font-semibold mb-4",children:"Community"}),(0,n.jsxs)("ul",{className:"space-y-2 text-gray-400",children:[(0,n.jsx)("li",{children:(0,n.jsx)(o(),{href:"https://github.com/sacalon/sacalon",className:"hover:text-white transition-colors",children:"GitHub"})}),(0,n.jsx)("li",{children:(0,n.jsx)(o(),{href:"https://github.com/sacalon/sacalon/discussions",className:"hover:text-white transition-colors",children:"Discussions"})}),(0,n.jsx)("li",{children:(0,n.jsx)(o(),{href:"https://discord.gg/sacalon",className:"hover:text-white transition-colors",children:"Discord"})}),(0,n.jsx)("li",{children:(0,n.jsx)(o(),{href:"https://twitter.com/sacalon_lang",className:"hover:text-white transition-colors",children:"Twitter"})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"font-semibold mb-4",children:"Resources"}),(0,n.jsxs)("ul",{className:"space-y-2 text-gray-400",children:[(0,n.jsx)("li",{children:(0,n.jsx)(o(),{href:"#",className:"hover:text-white transition-colors",children:"Documentation"})}),(0,n.jsx)("li",{children:(0,n.jsx)(o(),{href:"#",className:"hover:text-white transition-colors",children:"Examples"})})]})]})]}),(0,n.jsx)("div",{className:"border-t border-gray-800 mt-8 pt-8 text-center text-gray-400",children:(0,n.jsx)("p",{children:"\xa9 2019-2025 Sacalon Programming Language. Open source under BSD-3-Clause license."})})]})})]})}},2704:()=>{},2765:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"notFound",{enumerable:!0,get:function(){return a}});let n=""+r(8704).HTTP_ERROR_FALLBACK_ERROR_CODE+";404";function a(){let e=Object.defineProperty(Error(n),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});throw e.digest=n,e}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2853:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6346,23)),Promise.resolve().then(r.t.bind(r,7924,23)),Promise.resolve().then(r.t.bind(r,5656,23)),Promise.resolve().then(r.t.bind(r,99,23)),Promise.resolve().then(r.t.bind(r,8243,23)),Promise.resolve().then(r.t.bind(r,8827,23)),Promise.resolve().then(r.t.bind(r,2763,23)),Promise.resolve().then(r.t.bind(r,7173,23))},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3148:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(6373).A)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]])},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3609:()=>{},3873:e=>{"use strict";e.exports=require("path")},4592:(e,t,r)=>{"use strict";r.d(t,{$:()=>c});var n=r(7413),a=r(1120),o=r(403),i=r(662),s=r(6819);let l=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...i},c)=>{let u=a?o.DX:"button";return(0,n.jsx)(u,{className:(0,s.cn)(l({variant:t,size:r,className:e})),ref:c,...i})});c.displayName="Button"},5465:()=>{},6405:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6444,23)),Promise.resolve().then(r.t.bind(r,6042,23)),Promise.resolve().then(r.t.bind(r,8170,23)),Promise.resolve().then(r.t.bind(r,9477,23)),Promise.resolve().then(r.t.bind(r,9345,23)),Promise.resolve().then(r.t.bind(r,2089,23)),Promise.resolve().then(r.t.bind(r,6577,23)),Promise.resolve().then(r.t.bind(r,1307,23))},6412:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>c});var n=r(5239),a=r(8088),o=r(8170),i=r.n(o),s=r(893),l={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let c={children:["",{children:["news",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2013)),"C:\\Users\\PR\\Downloads\\sacalon-website\\app\\news\\[slug]\\page.tsx"]}]},{loading:[()=>Promise.resolve().then(r.bind(r,536)),"C:\\Users\\PR\\Downloads\\sacalon-website\\app\\news\\[slug]\\loading.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,8014)),"C:\\Users\\PR\\Downloads\\sacalon-website\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,5284,23)),"next/dist/client/components/unauthorized-error"]}]}.children,u=["C:\\Users\\PR\\Downloads\\sacalon-website\\app\\news\\[slug]\\page.tsx"],d={require:r,loadChunk:()=>Promise.resolve()},m=new n.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/news/[slug]/page",pathname:"/news/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6487:()=>{},6819:(e,t,r)=>{"use strict";r.d(t,{cn:()=>o});var n=r(5986),a=r(8974);function o(...e){return(0,a.QP)((0,n.$)(e))}},6897:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRedirectError:function(){return i},getRedirectStatusCodeFromError:function(){return d},getRedirectTypeFromError:function(){return u},getURLFromRedirectError:function(){return c},permanentRedirect:function(){return l},redirect:function(){return s}});let n=r(2836),a=r(9026),o=r(9121).actionAsyncStorage;function i(e,t,r){void 0===r&&(r=n.RedirectStatusCode.TemporaryRedirect);let o=Object.defineProperty(Error(a.REDIRECT_ERROR_CODE),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return o.digest=a.REDIRECT_ERROR_CODE+";"+t+";"+e+";"+r+";",o}function s(e,t){var r;throw null!=t||(t=(null==o?void 0:null==(r=o.getStore())?void 0:r.isAction)?a.RedirectType.push:a.RedirectType.replace),i(e,t,n.RedirectStatusCode.TemporaryRedirect)}function l(e,t){throw void 0===t&&(t=a.RedirectType.replace),i(e,t,n.RedirectStatusCode.PermanentRedirect)}function c(e){return(0,a.isRedirectError)(e)?e.digest.split(";").slice(2,-2).join(";"):null}function u(e){if(!(0,a.isRedirectError)(e))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return e.digest.split(";",2)[1]}function d(e){if(!(0,a.isRedirectError)(e))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return Number(e.digest.split(";").at(-2))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7393:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,4536,23))},7576:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return u},RedirectType:function(){return a.RedirectType},forbidden:function(){return i.forbidden},notFound:function(){return o.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect},unauthorized:function(){return s.unauthorized},unstable_rethrow:function(){return l.unstable_rethrow}});let n=r(6897),a=r(9026),o=r(2765),i=r(8976),s=r(899),l=r(163);class c extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class u extends URLSearchParams{append(){throw new c}delete(){throw new c}set(){throw new c}sort(){throw new c}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7665:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,5814,23))},8014:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,metadata:()=>i});var n=r(7413),a=r(1421),o=r.n(a);r(2704);let i={title:"Sacalon Programming Language",description:"A general purpose and open source programming language designed to build optimal, maintainable, reliable and efficient software.",generator:"v0.dev"};function s({children:e}){return(0,n.jsx)("html",{lang:"en",children:(0,n.jsx)("body",{className:o().className,children:e})})}},8335:()=>{},8661:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unstable_rethrow",{enumerable:!0,get:function(){return function e(t){if((0,i.isNextRouterError)(t)||(0,o.isBailoutToCSRError)(t)||(0,l.isDynamicServerError)(t)||(0,s.isDynamicPostpone)(t)||(0,a.isPostpone)(t)||(0,n.isHangingPromiseRejectionError)(t))throw t;t instanceof Error&&"cause"in t&&e(t.cause)}}});let n=r(8388),a=r(2637),o=r(1846),i=r(1162),s=r(4971),l=r(8479);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8971:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(6373).A)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]])},8976:(e,t,r)=>{"use strict";function n(){throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E488",enumerable:!1,configurable:!0})}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"forbidden",{enumerable:!0,get:function(){return n}}),r(8704).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9455:(e,t,r)=>{"use strict";r.d(t,{E:()=>s});var n=r(7413);r(1120);var a=r(662),o=r(6819);let i=(0,a.F)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function s({className:e,variant:t,...r}){return(0,n.jsx)("div",{className:(0,o.cn)(i({variant:t}),e),...r})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[357,669],()=>r(6412));module.exports=n})();